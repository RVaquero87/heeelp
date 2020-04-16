require("dotenv").config();
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const _ = require("lodash");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");
const messageDefault = require("../email/messageDefault");

//Models
const Contacts = require("../models/Contacts");

// CREATE MESSAGE CONTACT
router.post("/create", async (req, res, next) => {
  const { username, title, message } = req.body;

  // Create the user
  const newContact = await Contacts.create({
    username,
    title,
    message,
  });

  return res.json({
    status: 200,
    message: "Mensaje enviado, recibirá una contestación lo antes posible",
  });
});

//GET ALL MESSAGES CONTACT
router.post("/alls", isLoggedIn(), async (req, res) => {
  try {
    const messageContactList = await Contacts.find().sort({ createdAt: -1 });
    return res.json(messageContactList);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//DELETE MESSAGES CONTACT
router.post("/delete", isLoggedIn(), async (req, res) => {
  try {
    const { _id } = req.body;
    await Contacts.findByIdAndRemove(_id);
    return res.json({
      status: 200,
      message: "Mensaje eliminado satisfactoriamente",
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

//SEND MESSAGES CONTACT
router.post("/send", isLoggedIn(), async (req, res) => {
  try {
    const { to, subject, emailbody } = req.body;

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    let mailOptions = {
      from: '"heeelp!" <heeelp.web@gmail.com>',
      to: to,
      subject: subject,
      html: `Saludos Cordiales,<br/><br/>${emailbody}<br/><br/>Recibe un cordial saludo,<br/><br/>El Equipo de h<b>eee</b>lp!<br/><br/>${messageDefault}`,
    };

    transporter
      .sendMail(mailOptions)
      .then((info) => console.log("enviado"))
      .catch((error) => console.log("error"));

    return res.json({
      status: 200,
      message: "Email enviado satisfactoriamente",
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

module.exports = router;

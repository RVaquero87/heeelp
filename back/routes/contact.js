const express = require("express");
const router = express.Router();
const axios = require("axios");
const _ = require("lodash");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

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
    const { from, to, subject, emailbody } = req.body;

    // const contactService = axios.create({
    //   baseURL: "https://api.sendgrid.com/v3/mail/send",
    // });

    // contactService
    //   .post("/", {
    //     from,
    //     to,
    //     subject,
    //     emailbody,
    //   })
    //   .then((response) => {
    //     console.log("response del servudior", response);
    //     return response;
    //   })
    //   .catch(function (error) {
    //     console.log("error del servidor", error);
    //     return error;
    //   });

    return res.json({
      status: 200,
      message: "Email enviado satisfactoriamente",
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

module.exports = router;

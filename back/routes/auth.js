require("dotenv").config();
const express = require("express");
const router = express.Router();
const _ = require("lodash");
const passport = require("passport");
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");
const uploader = require("../cloudinary/cloudinary.config");
const nodemailer = require("nodemailer");
const welcome = require("../email/welcome");
const bye = require("../email/bye");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

//Models
const Users = require("../models/Users");

// SIGNUP
router.post("/signup", async (req, res, next) => {
  const {
    username,
    password,
    rol,
    name,
    lastname,
    dniPassport,
    birthYear,
    street,
    number,
    portal,
    stairs,
    floor,
    letter,
    postalCode,
    city,
    legalCheck,
  } = req.body;

  // Create the user
  const existingUser = await Users.findOne({ username });
  if (!existingUser) {
    const newUser = await Users.create({
      username,
      password: hashPassword(password),
      rol,
      name,
      lastname,
      dniPassport,
      birthYear,
      street,
      number,
      portal,
      stairs,
      floor,
      letter,
      postalCode,
      city,
      legalCheck,
    });

    let mailOptions = {
      from: '"heeelp!"  <heeelp.web@gmail.com>',
      to: username,
      subject: `Bienvenido a heeelp!`,
      html: welcome,
    };

    transporter
      .sendMail(mailOptions)
      .then((info) => console.log("enviado"))
      .catch((error) => console.log("error"));

    // Directly login user
    req.logIn(newUser, (err) => {
      req.user.visits += 1;
      req.user.save();
      return res.json(
        _.pick(req.user, [
          "_id",
          "username",
          "rol",
          "image",
          "name",
          "lastname",
          "dniPassport",
          "birthYear",
          "street",
          "number",
          "portal",
          "stairs",
          "floor",
          "letter",
          "postalCode",
          "city",
          "country",
          "createdAt",
          "updatedAt",
        ])
      );
    });
  } else {
    return res.json({ status: 400, message: "Usuario ya existente" });
  }
});

// LOGIN
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, failureDetails) => {
    if (err) {
      return res.json({ status: 500, message: "Error de autentificación" });
    }

    if (!user) {
      return res.json({ status: 401, message: failureDetails.message });
    }

    req.login(user, (err) => {
      if (err) {
        return res.json({ status: 500, message: "Sesion mal guardada" });
      }

      req.user.visits += 1;
      req.user.save();
      return res.json(
        _.pick(req.user, [
          "_id",
          "username",
          "rol",
          "image",
          "name",
          "lastname",
          "dniPassport",
          "birthYear",
          "street",
          "number",
          "portal",
          "stairs",
          "floor",
          "letter",
          "postalCode",
          "city",
          "country",
          "lat",
          "lng",
          "createdAt",
          "updatedAt",
        ])
      );
    });
  })(req, res, next);
});

// LOGOUT
router.post("/logout", isLoggedIn(), async (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: 200, message: "Log out realizado con exito" });
  } else {
    return res.json({
      status: 401,
      message: "No puedes realizar el logout sin estar login",
    });
  }
});

/* EDIT */
router.post("/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const {
      name,
      lastname,
      dniPassport,
      birthYear,
      street,
      number,
      portal,
      stairs,
      floor,
      letter,
      postalCode,
      city,
    } = req.body;
    await Users.findByIdAndUpdate(id, {
      name,
      lastname,
      dniPassport,
      birthYear,
      street,
      number,
      portal,
      stairs,
      floor,
      letter,
      postalCode,
      city,
    });
    return res.json({
      status: 200,
      message: "Usuario editado satisfactoriamente",
    });
  } catch (error) {
    return res.json({ status: 401, message: "Fallo al editar Usuario" });
  }
});

// WHOAMI
router.post("/whoami", (req, res, next) => {
  if (req.user)
    return res.json(
      _.pick(req.user, [
        "_id",
        "username",
        "rol",
        "image",
        "name",
        "lastname",
        "dniPassport",
        "birthYear",
        "street",
        "number",
        "portal",
        "stairs",
        "floor",
        "letter",
        "postalCode",
        "city",
        "country",
        "lat",
        "lng",
        "createdAt",
        "updatedAt",
      ])
    );
  else
    return res
      .status(401)
      .json({ status: 401, message: "No existe ningun usuario" });
});

//Image Upload
router.post("/upload", uploader.single("imageUrl"), async (req, res, next) => {
  const imageUpload = req.file.secure_url;

  if (!req.file) {
    next(new Error("No existe ningún archivo para subir"));
    return;
  }
  if (req.user) {
    await Users.findByIdAndUpdate(
      req.user._id,
      {
        image: imageUpload,
      },
      { new: true }
    );
  }
  res.json({
    secure_url: imageUpload,
    status: 200,
    message: "Subida de imagen satisfactoria",
  });
});

//USERS LIST
router.post("/users-list", isLoggedIn(), async (req, res) => {
  try {
    const usersList = await Users.find();
    return res.json(usersList);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//DELETE USER LIST
router.post("/users-delete", isLoggedIn(), async (req, res) => {
  try {
    const { _id } = req.body;
    const userDelete = await Users.findByIdAndRemove(_id);

    let mailOptions2 = {
      from: '"heeelp!"  <heeelp.web@gmail.com>',
      to: userDelete.username,
      subject: `Hasta pronto!`,
      html: bye,
    };

    transporter
      .sendMail(mailOptions2)
      .then((info) => console.log("enviado"))
      .catch((error) => console.log("error"));

    return res.json({
      status: 200,
      message: "Usuario eliminado satisfactoriamente",
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

//EDIT USERS LIST
router.post("/users-edit", isLoggedIn(), async (req, res) => {
  const { _id, rol } = req.body;
  try {
    await Users.findByIdAndUpdate(_id, {
      rol,
    });
    return res.json({
      status: 200,
      message: "Usuario editado satisfactoriamente",
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

module.exports = router;

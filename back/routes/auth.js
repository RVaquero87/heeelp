const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const _ = require("lodash");
const passport = require("passport");
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");
const uploader = require("../cloudinary/cloudinary.config");

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
    country,
    legalCheck
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
      country,
      legalCheck
    });
    // Directly login user
    req.logIn(newUser, err => {
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
          "updatedAt"
        ])
      );
    });
  } else {
    console.log("hola");
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

    req.login(user, err => {
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
          "updatedAt"
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
      message: "No puedes realizar el logout sin estar login"
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
      country
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
      country
    });
    return res.json({
      status: 200,
      message: "Usuario editado satisfactoriamente"
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
        "updatedAt"
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
        image: imageUpload
      },
      { new: true }
    );
  }
  res.json({
    secure_url: imageUpload,
    status: 200,
    message: "Subida de imagen satisfactoria"
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
    await Users.findByIdAndRemove(_id);
    return res.json({
      status: 200,
      message: "Usuario eliminado satisfactoriamente"
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

//EDIT USERS LIST
router.post("/users-edit", isLoggedIn(), async (req, res) => {
  const { id, rol } = req.body;
  try {
    await Users.findByIdAndUpdate(id, {
      rol
    });
    return res.json({
      status: 200,
      message: "Usuario editado satisfactoriamente"
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

module.exports = router;

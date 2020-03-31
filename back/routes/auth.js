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
    image,
    name,
    lastname,
    dni,
    birtYear,
    street,
    number,
    portal,
    stairs,
    floor,
    letter,
    postalCode,
    city,
    country,
    lat,
    lng,
    legalCheck
  } = req.body;

  // Create the user
  const existingUser = await Users.findOne({ username });
  if (!existingUser) {
    const newUser = await Users.create({
      username,
      password: hashPassword(password),
      rol,
      image,
      name,
      lastname,
      dni,
      birtYear,
      street,
      number,
      portal,
      stairs,
      floor,
      letter,
      postalCode,
      city,
      country,
      lat,
      lng,
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
          "dni",
          "birtYear",
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
          "dni",
          "birtYear",
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
      username,
      image,
      name,
      lastname,
      dni,
      birtYear,
      street,
      number,
      portal,
      stairs,
      floor,
      letter,
      postalCode,
      city,
      country,
      lat,
      lng
    } = req.body;
    await Users.findByIdAndUpdate(id, {
      username,
      image,
      name,
      lastname,
      dni,
      birtYear,
      street,
      number,
      portal,
      stairs,
      floor,
      letter,
      postalCode,
      city,
      country,
      lat,
      lng
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
        "dni",
        "birtYear",
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
  else return res.json({ status: 401, message: "No existe ningun usuario" });
});

// Post Upload Image
router.put("/upload", uploader.single("image"), async (req, res, next) => {
  const { file } = req;
  console.log("file", file);
  if (!file) {
    return next(new Error("No imagen"));
  }

  try {
    await Users.findByIdAndUpdate(
      req.user._id,
      {
        image: file.secure_url
      },
      { new: true }
    );
    console.log(req.user._id);

    return res.json({
      status: 200,
      message: "Subida de imagen satisfactoria",
      image: file.secure_url
    });
  } catch (error) {
    return res.json({
      status: 500,
      message: "Subida de imagen fallo"
    });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const _ = require("lodash");
const passport = require("passport");
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

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
    res.status(400).json({ message: "Usuario ya existente" });
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
        return res.status(500).json({ message: "Sesion mal guardada" });
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
    return res.status(200).json({ message: "Log out realizado con exito" });
  } else {
    return res
      .status(401)
      .json({ message: "No puedes realizar el logout sin estar login" });
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
    return res
      .status(200)
      .json({ message: "Usuario editado satisfactoriamente" });
  } catch (error) {
    return res.status(401).json({ message: "Fallo al editar Usuario" });
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
  else return res.status(401).json({ message: "No existe ningun usuario" });
});

// // PUT route -  upload = create user image
// router.put('/upload', uploader.single('image'), async (req, res, next) => {
//   const { file } = req;
//   console.log('Uploading', file);

//   if (!file) {
//     return next(new Error('No file uploaded!'));
//   }

//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.user._id,
//       {
//         image: file.secure_url
//       },
//       { new: true }
//     );
//     console.log('User image uploaded ', updatedUser);
//     return res.status(200).json({
//       message: 'File successfully uploaded',
//       image: file.secure_url
//     });
//   } catch (error) {
//     console.log('Error uploading file', error);
//     return res.status(500).json({
//       message: 'Image upload failed'
//     });
//   }
// });

module.exports = router;

const express = require("express");
const router = express.Router();
const Reviews = require("../models/Reviews");
const Users = require("../models/Users");
const _ = require("lodash");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

// CREATE REVIEWS
router.post("/create", isLoggedIn(), async (req, res, next) => {
  const { title, message, stars } = req.body;
  const idUser = req.user;

  // Create the Review
  const newReviews = await Reviews.create({
    title,
    message,
    stars,
    creatorUserid: idUser
  });

  return res.json({
    review: _.pick(newReviews, [
      "_id",
      "title",
      "stars",
      "creatorUserid",
      "createdAt",
      "updatedAt"
    ]),
    status: 200,
    message: "Comentario creado satisfactoriamente"
  });
});

//GET ALL REVIEWS OR BY ID USER
router.post("/alls", async (req, res) => {
  try {
    const { _id } = req.body;
    if (_id) {
      const reviewsList = await Reviews.find({
        creatorUserid: { _id: _id }
      })
        .sort({ createdAt: -1 })
        .populate("creatorUserid");

      return res.json(reviewsList);
    } else {
      const reviewsList = await Reviews.find().populate("creatorUserid");
      return res.json(reviewsList);
    }
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

// //DELETE REVIEW BY ID
router.post("/delete", isLoggedIn(), async (req, res) => {
  try {
    const { _id } = req.body;
    await Reviews.findByIdAndRemove(_id);
    return res.json({
      status: 200,
      message: "Comentario eliminado satisfactoriamente"
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//Models
const Notifications = require("../models/Notifications");

// CREATE NOTIFICATIONS
router.post("/create", isLoggedIn(), async (req, res, next) => {
  const { title, message, aidResquestId, receptorUserId } = req.body;
  const idUser = req.user;

  // Create the Notifications
  await Notifications.create({
    title,
    message,
    creatorUserId: idUser._id,
    aidResquestId,
    receptorUserId,
  });

  return res.json({
    status: 200,
    message: "Mensaje enviado",
  });
});

//GET NOTIFICATIONS BY ID USER CREATOR
router.post("/alls-creator-id", async (req, res) => {
  try {
    const idUser = req.user;
    const notificationsList = await Notifications.find({
      creatorUserId: { _id: idUser._id },
    })
      .sort({ createdAt: -1 })
      .populate("receptorUserId")
      .populate("aidResquestId");

    return res.json(notificationsList);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//GET NOTIFICATIONS BY ID USER RECEPTOR
router.post("/alls-receptor-id", async (req, res) => {
  try {
    const idUser = req.user;

    const notificationsList = await Notifications.find({
      receptorUserId: { _id: idUser._id },
    })
      .sort({ createdAt: -1 })
      .populate("creatorUserId")
      .populate("aidResquestId");

    return res.json(notificationsList);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//GET NOTIFICATIONS ALLS
router.post("/alls", async (req, res) => {
  try {
    const notificationsList = await Notifications.find()
      .sort({ createdAt: -1 })
      .populate("creatorUserId")
      .populate("receptorUserId")
      .populate("aidResquestId");

    return res.json(notificationsList);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//DELETE NOTIFICATIONS BY ID
router.post("/delete", isLoggedIn(), async (req, res) => {
  try {
    const { _id } = req.body;
    await Notifications.findByIdAndRemove(_id);
    return res.json({
      status: 200,
      message: "Mensaje eliminado satisfactoriamente",
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

module.exports = router;
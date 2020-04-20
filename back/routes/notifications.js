const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//Models
const Notifications = require("../models/Notifications");

// CREATE NOTIFICATIONS
router.post("/create", isLoggedIn(), async (req, res, next) => {
  const { message, aidRequestId, receptorUserId } = req.body;
  const idUser = req.user;

  // Create the Notifications
  await Notifications.create({
    message,
    creatorUserId: idUser._id,
    aidRequestId,
    receptorUserId,
  });

  return res.json({
    status: 200,
    message: "Notificación enviada",
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
      .populate("creatorUserId")
      .populate("receptorUserId")
      .populate("aidRequestId");

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
      .populate("receptorUserId")
      .populate("aidRequestId");

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
      .populate("aidRequestId");

    return res.json(notificationsList);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//CHANGE NOTIFICATIONS STATUS
router.post("/change-status", async (req, res) => {
  try {
    const idUser = req.user;
    const notificationsList = await Notifications.find({
      receptorUserId: { _id: idUser._id },
    });

    await Promise.all(
      notificationsList.map(async (aidRequest) => {
        if (aidRequest.status === "Nuevo") {
          await Notifications.findByIdAndUpdate(aidRequest._id, {
            status: "Visto",
          }).then((aidRequest) => aidRequest);
        }
      })
    );

    return res.json({
      status: 200,
      message: "Status cambiado",
    });
  } catch (err) {
    return res.json({
      status: 400,
      message: "Fallo al cambiar status",
    });
  }
});

//DELETE NOTIFICATIONS BY ID
router.post("/delete", isLoggedIn(), async (req, res) => {
  try {
    const { _id } = req.body;
    await Notifications.findByIdAndRemove(_id);
    return res.json({
      status: 200,
      message: "Notificación eliminada satisfactoriamente",
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

module.exports = router;

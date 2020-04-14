const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//Models
const Messages = require("../models/Messages");

// CREATE MESSAGES
router.post("/create", isLoggedIn(), async (req, res, next) => {
  const { title, message, aidResquestId, receptorUserId } = req.body;
  const idUser = req.user;

  // Create the Messages
  await Messages.create({
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

//CHANGE MESSAGES STATUS
router.post("/change-status", async (req, res) => {
  try {
    const idUser = req.user;
    const messagesList = await Messages.find({
      creatorUserId: { _id: idUser._id },
    });

    await Promise.all(
      messagesList.map(async (message) => {
        if (message.status === "Nuevo") {
          await Messages.findByIdAndUpdate(message._id, {
            status: "Visto",
          }).then((message) => message);
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

//GET MESSAGES BY ID USER CREATOR
router.post("/alls-creator-id", async (req, res) => {
  try {
    const idUser = req.user;
    const messagesList = await Messages.find({
      creatorUserId: { _id: idUser._id },
    })
      .sort({ createdAt: -1 })
      .populate("creatorUserId")
      .populate("receptorUserId")
      .populate("aidResquestId");

    return res.json(messagesList);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//GET MESSAGES BY ID USER RECEPTOR
router.post("/alls-receptor-id", async (req, res) => {
  try {
    const idUser = req.user;

    const messagesList = await Messages.find({
      receptorUserId: { _id: idUser._id },
    })
      .sort({ createdAt: -1 })
      .populate("creatorUserId")
      .populate("receptorUserId")
      .populate("aidResquestId");

    return res.json(messagesList);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//GET MESSAGES ALLS
router.post("/alls", async (req, res) => {
  try {
    const messagesList = await Messages.find()
      .sort({ createdAt: -1 })
      .populate("creatorUserId")
      .populate("receptorUserId")
      .populate("aidResquestId");

    return res.json(messagesList);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//DELETE MESSAGES BY ID
router.post("/delete", isLoggedIn(), async (req, res) => {
  try {
    const { _id } = req.body;
    await Messages.findByIdAndRemove(_id);
    return res.json({
      status: 200,
      message: "Mensaje eliminado satisfactoriamente",
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

module.exports = router;

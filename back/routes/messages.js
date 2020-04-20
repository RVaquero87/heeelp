const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//Models
const Messages = require("../models/Messages");

// CREATE MESSAGES
router.post("/create", isLoggedIn(), async (req, res, next) => {
  const { message, aidRequestId, receptorUserId } = req.body;
  const idUser = req.user;

  // Create the Messages
  await Messages.create({
    message,
    creatorUserId: idUser._id,
    receptorUserId,
    aidRequestId,
  });

  return res.json({
    status: 200,
    message: "Mensaje enviado",
  });
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
      .populate("aidRequestId");

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
      .populate("aidRequestId");

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
      .populate("aidRequestId");

    return res.json(messagesList);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//CHANGE MESSAGES STATUS
router.post("/change-status", async (req, res) => {
  try {
    const idUser = req.user;

    const messagesList = await Messages.find({
      receptorUserId: { _id: idUser._id },
    });

    await Promise.all(
      messagesList.map(async (message) => {
        if (message.statusReceptor === "Nuevo") {
          await Messages.findByIdAndUpdate(message._id, {
            statusReceptor: "Visto",
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

//DELETE MESSAGES STATUS
router.post("/delete", async (req, res) => {
  try {
    const { _id } = req.body;
    const idUser = req.user;

    const ReceptorFind = await Messages.find({
      $and: [{ _id: _id }, { receptorUserId: { _id: idUser._id } }],
    });

    const creatorFind = await Messages.find({
      $and: [{ _id: _id }, { creatorUserId: { _id: idUser._id } }],
    });

    if (creatorFind.length) {
      await Messages.findByIdAndUpdate(creatorFind[0]._id, {
        statusCreator: "Borrado",
      });
    } else {
      await Messages.findByIdAndUpdate(ReceptorFind[0]._id, {
        statusReceptor: "Borrado",
      });
    }

    return res.json({
      status: 200,
      message: "Mensaje eliminado de tu listado",
    });
  } catch (err) {
    return res.json({
      status: 400,
      message: "Fallo al cambiar status",
    });
  }
});

module.exports = router;

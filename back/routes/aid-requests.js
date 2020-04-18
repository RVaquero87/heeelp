const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//Models
const AidRequests = require("../models/AidRequests");

// CREATE AidRequest
router.post("/create", isLoggedIn(), async (req, res, next) => {
  try {
    const { title, content, price, time, type } = req.body;
    const idUser = req.user;

    // Create the AidRequest
    const aidRequest = await AidRequests.create({
      title,
      content,
      creatorUserid: idUser,
      price,
      time,
      type,
      status: "En creación",
    });

    return res.json({
      aidRequest: aidRequest,
      status: 200,
      message: "Petición de ayuda creada satisfactoriamente",
    });
  } catch (error) {
    return res.json({
      status: 401,
      message: "Fallo al crear el la petición de ayuda",
    });
  }
});

/* EDIT AidRequest */
router.post("/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const { _id, title, content, price, time } = req.body;
    const aidRequest = await AidRequests.findByIdAndUpdate(_id, {
      title,
      content,
      price,
      time,
    });
    return res.json({
      aidRequest: aidRequest,
      status: 200,
      message: "Petición de ayuda editada satisfactoriamente",
    });
  } catch (error) {
    return res.json({
      status: 401,
      message: "Fallo al crear el la petición de ayuda",
    });
  }
});

//GET ID AidRequests Creator
router.post("/id-creator", async (req, res) => {
  try {
    const idUser = req.user;

    const aidRequests = await AidRequests.find({
      creatorUserid: { _id: idUser._id },
    });

    await Promise.all(
      aidRequests.map(async (aidRequest) => {
        const dateActually = new Date();
        if (dateActually > aidRequest.time) {
          if (aidRequest.status === "En curso") {
            await AidRequests.findByIdAndUpdate(aidRequest._id, {
              status: "Realizada",
            }).then((aidRequest) => aidRequest);
          } else if (aidRequest.status === "Publicada") {
            await AidRequests.findByIdAndUpdate(aidRequest._id, {
              status: "Cancelada",
            });
          }
        }
      })
    );

    const aidRequestsModify = await AidRequests.find({
      creatorUserid: { _id: idUser._id },
    })
      .sort({ createdAt: -1 })
      .populate("creatorUserid")
      .populate("helperId")
      .populate("shoppinglist");

    return res.json(aidRequestsModify);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//GET ID AidRequests Helper
router.post("/id-helper", async (req, res) => {
  try {
    const idUser = req.user;

    const aidRequests = await AidRequests.find({
      helperId: { _id: idUser._id },
    });

    await Promise.all(
      aidRequests.map(async (aidRequest) => {
        const dateActually = new Date();
        if (dateActually > aidRequest.time) {
          if (aidRequest.status === "En curso") {
            await AidRequests.findByIdAndUpdate(aidRequest._id, {
              status: "Realizada",
            }).then((aidRequest) => aidRequest);
          } else if (aidRequest.status === "Publicada") {
            await AidRequests.findByIdAndUpdate(aidRequest._id, {
              status: "Cancelada",
            });
          }
        }
      })
    );

    const aidRequestsModify = await AidRequests.find({
      helperId: { _id: idUser._id },
    })
      .sort({ createdAt: -1 })
      .populate("creatorUserid")
      .populate("helperId")
      .populate("shoppinglist");

    return res.json(aidRequestsModify);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

//GET ALL AidRequest
router.post("/alls", async (req, res) => {
  try {
    const aidRequests = await AidRequests.find();

    await Promise.all(
      aidRequests.map(async (aidRequest) => {
        const dateActually = new Date();
        if (dateActually > aidRequest.time) {
          if (aidRequest.status === "En curso") {
            await AidRequests.findByIdAndUpdate(aidRequest._id, {
              status: "Realizada",
            }).then((aidRequest) => aidRequest);
          } else if (aidRequest.status === "Publicada") {
            await AidRequests.findByIdAndUpdate(aidRequest._id, {
              status: "Cancelada",
            });
          }
        }
      })
    );
    const aidRequestsModify = await AidRequests.find()
      .sort({ createdAt: -1 })
      .populate("creatorUserid")
      .populate("helperId")
      .populate("shoppinglist");
    return res.json(aidRequestsModify);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

/* PUBLIC AidRequest */
router.post("/public", isLoggedIn(), async (req, res, next) => {
  try {
    const { _id } = req.body;

    const aidRequest = await AidRequests.findById(_id);

    if (aidRequest.shoppinglist.length <= 0) {
      return res.json({
        status: 401,
        message: "Debe incluir una lista de peticiones",
      });
    }
    const dateActually = new Date();
    if (dateActually > aidRequest.time) {
      return res.json({
        status: 401,
        message: "La fecha de la tarea no puede ser anterior al día actual",
      });
    }

    await AidRequests.findByIdAndUpdate(_id, {
      status: "Publicada",
    });
    return res.json({
      status: 200,
      message: "Petición de ayuda publicada satisfactoriamente",
    });
  } catch (error) {
    return res.json({
      status: 401,
      message: "Fallo al publicar la petición de ayuda",
    });
  }
});

//GET AIDREQUEST BY ID
router.post("/id-one", async (req, res) => {
  try {
    const { _id } = req.body;

    const aidRequests = await AidRequests.find({
      _id,
    })
      .populate("creatorUserid")
      .populate("helperId")
      .populate("shoppinglist");

    return res.json(aidRequests);
  } catch (err) {
    return res.json({ status: 400, message: "Fallo al recibir los datos" });
  }
});

/* Add HELPER in AidRequest */
router.post("/add-helper", isLoggedIn(), async (req, res, next) => {
  try {
    const { _id } = req.body;
    const idUser = req.user;
    await AidRequests.findByIdAndUpdate(_id, {
      helperId: idUser._id,
      status: "En curso",
      modifyCard: new Date(),
    });
    return res.json({
      status: 200,
      message: "Petición de ayuda añadida a tu listado",
    });
  } catch (error) {
    return res.json({
      status: 401,
      message: "Fallo al añadir a tu listado la petición de ayuda",
    });
  }
});

/* Delete HELPER in AidRequest */
router.post("/delete-helper", isLoggedIn(), async (req, res, next) => {
  try {
    const { _id } = req.body;
    await AidRequests.findByIdAndUpdate(_id, {
      helperId: null,
      status: "Publicada",
      modifyCard: null,
    });
    return res.json({
      status: 200,
      message: "Petición de ayuda eliminada de tu listado",
    });
  } catch (error) {
    return res.json({
      status: 401,
      message: "Fallo al eliminar de tu listado la petición de ayuda",
    });
  }
});

/* DUPLICATE AidRequest */
router.post("/duplicate", isLoggedIn(), async (req, res, next) => {
  try {
    const { _id } = req.body;

    //Find AidRequest
    const oldAidRequest = await (await AidRequests.findById(_id)).populate(
      "shoppinglist"
    );

    // Create the AidRequest
    const newAidRequest = await AidRequests.create({
      title: oldAidRequest.title,
      content: oldAidRequest.content,
      creatorUserid: oldAidRequest.creatorUserid,
      price: oldAidRequest.price,
      time: oldAidRequest.time,
      type: oldAidRequest.type,
      status: "En creación",
    });

    return res.json({
      aidRequest: newAidRequest,
      status: 200,
      message: "Petición de ayuda duplicada satisfactoriamente",
    });
  } catch (error) {
    return res.json({
      status: 401,
      message: "Fallo al duplicar la petición de ayuda",
    });
  }
});

/* Delete CANCEL AidRequest */
router.post("/cancel", isLoggedIn(), async (req, res, next) => {
  try {
    const { _id } = req.body;
    await AidRequests.findByIdAndUpdate(_id, {
      helperId: null,
      status: "Cancelada",
    });
    return res.json({
      status: 200,
      message: "La petición ha sido cancelada",
    });
  } catch (error) {
    return res.json({
      status: 401,
      message: "Fallo al cancelar la petición de ayuda",
    });
  }
});

module.exports = router;

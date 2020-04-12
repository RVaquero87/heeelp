const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");

//Models
const AidRequests = require("../models/AidRequests");
const ShoppingLists = require("../models/ShoppingLists");

//CREATE ShoppingList
router.post("/create", isLoggedIn(), async (req, res, next) => {
  try {
    const { aidRequestsId, name, description, image, quantity } = req.body;

    const listItem = await ShoppingLists.create({
      name,
      description,
      image,
      quantity,
    });

    await AidRequests.findByIdAndUpdate(aidRequestsId, {
      $push: { shoppinglist: listItem.id },
    });

    return res.json({
      status: 200,
      message: "Item creado satisfactoriamente",
    });
  } catch (error) {
    return res.json({
      status: 401,
      message: "Fallo al crear el Item",
    });
  }
});

//EDIT ShoppingList
router.post("/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const { name, description, image, quantity, _id } = req.body;

    await ShoppingLists.findByIdAndUpdate(_id, {
      name,
      description,
      image,
      quantity,
    });

    return res.json({
      status: 200,
      message: "Item editada satisfactoriamente",
    });
  } catch (error) {
    return res.json({
      status: 401,
      message: "Fallo al editarla el Item",
    });
  }
});

//DELETE ShoppingList
router.post("/delete", isLoggedIn(), async (req, res) => {
  try {
    const { _id, aidRequestsId } = req.body;

    await ShoppingLists.findByIdAndRemove(_id);

    await AidRequests.findById(aidRequestsId).then(async (aidRequest) => {
      const arrayShoppingList = aidRequest.shoppinglist;
      const arrayIdsList = await Promise.all(
        arrayShoppingList.filter((listItemId) => {
          return listItemId != _id;
        })
      );
      await AidRequests.findByIdAndUpdate(aidRequestsId, {
        shoppinglist: arrayIdsList.map((item) => item._id),
      });
    });
    return res.json({
      status: 200,
      message: "Item eliminado satisfactoriamente",
    });
  } catch (err) {
    return res.json({ status: 400, message: "No encontrado" });
  }
});

module.exports = router;

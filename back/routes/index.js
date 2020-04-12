const express = require("express");
const router = express.Router();

// routes users
const auth = require("./auth");
router.use("/auth", auth);

// routes AidsRequests
const aidRequest = require("./aid-requests");
router.use("/aid-requests", aidRequest);

// routes Notifications
const notifications = require("./notifications");
router.use("/notifications", notifications);

// routes ShoppingList
const shoppingLists = require("./shopping-lists");
router.use("/shopping-lists", shoppingLists);

// routes reviews
const reviews = require("./reviews");
router.use("/reviews", reviews);

// routes contact message
const contact = require("./contact");
router.use("/contact", contact);

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});

module.exports = router;

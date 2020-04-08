const express = require("express");
const router = express.Router();

// routes middlewares
const auth = require("./auth");
router.use("/auth", auth);

// routes reviews
const reviews = require("./reviews");
router.use("/reviews", reviews);

// routes reviews
const contact = require("./contact");
router.use("/contact", contact);

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});

module.exports = router;

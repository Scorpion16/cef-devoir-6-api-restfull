const express = require("express");
const router = express.Router();

const userRoute = require("../routes/users");
const catawayRoute = require("../routes/castaways");
const reservationRoute = require("../routes/reservations");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.status(200).json({name: process.env.APP_NAME, version: "1.0", status: 200, message: "Bienvenue sur l'API !"});
});

router.use("/users", userRoute);
router.use("/castaways", catawayRoute);
router.use("/reservations", reservationRoute);

module.exports = router;

const express = require("express");
const router = express.Router();

//Accès à la page service
const serviceUser = require("../services/users");

// CRUD users listing.
router.get("/:id", serviceUser.getById);

router.put("/add", serviceUser.add);

router.patch("/:id", serviceUser.update);

router.delete("/:id", serviceUser.delete);

module.exports = router;

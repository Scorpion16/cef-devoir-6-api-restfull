const express = require("express");
const router = express.Router();

//Accès à la page service
const service = require("../services/users");

// CRUD users listing.
router.get("/:id", service.getById);

router.put("/add", service.add);

router.patch("/:id", service.update);

router.delete("/:id", service.delete);

module.exports = router;

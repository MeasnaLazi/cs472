const mediaController = require("../controllers/media_controller")
const express = require("express");
const router = express.Router();

router.get("/:filename", mediaController.getImage);

module.exports = router;

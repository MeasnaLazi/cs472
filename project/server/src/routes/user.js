const userController = require("../controllers/user_controller")
const express = require("express");
const router = express.Router();

router.put("/", userController.login);

module.exports = router;

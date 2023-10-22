const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const notFountRouter = require("./404");

router.use("/users", userRouter);
router.use("*", notFountRouter);

module.exports= router;


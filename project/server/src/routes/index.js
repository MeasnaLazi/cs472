const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const animeRouter = require("./anime");
const notFountRouter = require("./404");

router.use("/users", userRouter);
router.use("/animes", animeRouter);
router.use("*", notFountRouter);

module.exports= router;


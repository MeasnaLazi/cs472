const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const animeRouter = require("./anime");
const homeRouter = require("./home");
const mediaRouter = require("./media");
const notFountRouter = require("./404");

router.use("/users", userRouter);
router.use("/anime", animeRouter);
router.use("/home", homeRouter);
router.use("/image", mediaRouter);
router.use("*", notFountRouter);

module.exports = router;


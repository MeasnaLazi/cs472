const express= require("express");
const router= express.Router();

const homeRouter= require("./home");
const userRouter= require("./user");
const productRouter= require("./product");
const notFountRouter= require("./404");

router.use("/", homeRouter);
router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("*", notFountRouter);

module.exports= router;


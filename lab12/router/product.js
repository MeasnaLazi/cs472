const express= require("express");
const router= express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({ id: 1, name: "Mac", price: "$1999.99" });
});

router.post("/", (req, res, next) => {
    res.status(200).json({ id: 1, message: "Product save successful!" });
});

router.get("/error", (req, res, next) => {
    // let err = Error("Server Error From Product!");
    // next(err);
    next("Server Error From Product!");
});

module.exports= router;
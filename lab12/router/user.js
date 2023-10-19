const express= require("express");
const router= express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({ id: 1, user: "lazi", password: "****" });
});

router.post("/", (req, res, next) => {
    res.status(200).json({ id: 1, message: "User save successful!" });
});

router.get("/error", (req, res, next) => {
    throw Error("Server Error From User!");
});

module.exports= router;
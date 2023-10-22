const animeController = require("../controllers/anime_controller")
const express = require("express");
const router = express.Router();

router.get("/", animeController.getAllAnime);
router.get("/detail/:id", animeController.getAnimeById);
router.get("/filter", animeController.filterBy);

module.exports = router;

const animeController = require("../controllers/anime_controller")
const express = require("express");
const router = express.Router();

router.get("/", animeController.getAllAnime);
router.get("/detail/:id", animeController.getAnimeById);
router.get("/filter", animeController.filterBy);
router.get("/relate/:id", animeController.getRelatedList);

module.exports = router;

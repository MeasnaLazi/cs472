const animeController = require("../controllers/anime_controller")
const express = require("express");
const router = express.Router();

router.get("/", animeController.getAllAnime);
router.get("/detail/:id", animeController.getAnimeById);
router.post("/", animeController.createAnime);
router.delete("/:id", animeController.deleteAnime);
router.put("/:id", animeController.updateAnime);
router.get("/filter", animeController.filterBy);

module.exports = router;

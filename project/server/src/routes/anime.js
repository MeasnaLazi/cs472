const animeController = require("../controllers/anime_controller")
const express = require("express");
const router = express.Router();
const { jpegOnly } = require("../utils/file_utils");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/', fileFilter: jpegOnly });

router.get("/", animeController.getAllAnime);
router.get("/detail/:id", animeController.getAnimeById);
router.post("/", upload.single("thumbnail"), animeController.createAnime);
router.delete("/:id", animeController.deleteAnime);
router.put("/:id", upload.single("thumbnail"), animeController.updateAnime);
router.get("/filter", animeController.filterBy);

module.exports = router;

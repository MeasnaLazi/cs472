const Anime = require("../models/anime");
const AnimeRepository = require("../repositories/anime_repository");
const {  InvalidFormatExeption } = require("../exception/exceptions");

const getAllAnime = (req, res, next) => {
    let allAnime = AnimeRepository.getAllAnime();

    res.status(200).json(allAnime);
}

const getAnimeById = (req, res, next) => {
    let id = parseInt(req.params.id);
    let anime = AnimeRepository.getAnimeById(id);
    
    res.status(200).json(anime);
}

const createAnime = (req, res, next) => {
    let { id, name, type, thumbnial, src, description, upload_date } = req.body;

    if (id && name && type && thumbnial && src) {
        let anime = new Anime(id, name, type, thumbnial, src, description, upload_date);
        AnimeRepository.createAnime(anime);

        res.status(201).json(anime);
    } else {
        next(new InvalidFormatExeption("Please input all required field!"));
    }
}

const deleteAnime = (req, res, next) => {
    let id = parseInt(req.params.id);
    let anime = AnimeRepository.deleteAnimeById(id);
    
    res.status(200).json(anime);
}

const updateAnime = (req, res, next) => {
    let id = parseInt(req.params.id);
    let { name, type, thumbnial, src, description, upload_date } = req.body;
    let anime = AnimeRepository.updateAnime(id, type, thumbnial, src, description, upload_date);

    res.status(200).json(anime);
}

const filterBy = (req, res, next) => {
    let name = req.query.name ?? "";
    let type = req.query.type ?? undefined;
    let animes = AnimeRepository.filterBy(name, type);

    res.status(200).json(animes);
}

module.exports = {
    getAllAnime,
    getAnimeById,
    createAnime,
    deleteAnime,
    updateAnime,
    filterBy
};
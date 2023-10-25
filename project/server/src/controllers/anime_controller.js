const Anime = require("../models/anime");
const AnimeRepository = require("../repositories/anime_repository");
const {  InvalidFormatExeption, NotFoundExeption } = require("../exception/exceptions");
const { renameFileToJpeg, removeFile } = require("../utils/file_utils"); 

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
    let { id, name, type, src, description, release_date } = req.body;
    let file = req.file;
    let thumbnail = "image/" + file.filename + ".jpg";

    renameFileToJpeg(file);

    if (id && name && type && thumbnail && src) {
        let anime = new Anime(id, name, type, thumbnail, src, description, release_date);
        AnimeRepository.createAnime(anime);

        res.status(201).json(anime);
    } else {
        next(new InvalidFormatExeption("Please input all required field!"));
    }
}

const deleteAnime = (req, res, next) => {
    let id = parseInt(req.params.id);
    let anime = AnimeRepository.deleteAnimeById(id);

    removeFile(anime.thumbnail);
    
    res.status(200).json(anime);
}

const updateAnime = (req, res, next) => {
    let id = parseInt(req.params.id);
    let { name, type, src, description, release_date } = req.body;
    let findAnime = AnimeRepository.getAnimeById(id);

    if (!findAnime) {
        throw new NotFoundExeption("Anime not found!");
    }

    let thumbnail = undefined;

    if (req.file) {
        let file = req.file;
        thumbnail = "image/" + file.filename + ".jpg";
        
        renameFileToJpeg(file);
        removeFile(findAnime.thumbnail);
    }

    let anime = AnimeRepository.updateAnime(id, name, type, thumbnail, src, description, release_date);

    res.status(200).json(anime);
}

const filterBy = (req, res, next) => {
    let keyword = req.query.keyword ?? "";
    let type = req.query.type ?? undefined;
    let animes = AnimeRepository.filterBy(keyword, type);

    res.status(200).json(animes);
}

const getRelatedList = (req, res, next) => {
    let id = req.params.id;
    let animes = AnimeRepository.getRelatedList(id);
    
    res.status(200).json(animes);
}

module.exports = {
    getAllAnime,
    getAnimeById,
    createAnime,
    deleteAnime,
    updateAnime,
    filterBy,
    getRelatedList
};
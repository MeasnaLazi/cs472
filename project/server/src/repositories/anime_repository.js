const { LIST_ANIME } = require("../models/memory_db");
const { NotFoundExeption } = require("../exception/exceptions");

class AnimeRepository {

    static getAllAnime() {
        return LIST_ANIME;
    }

    static getAnimeById(id) {
        let anime = LIST_ANIME.find(a => a.id == id);
        if (!anime) {
            throw new NotFoundExeption("Anime not found!");
        }
        return anime;
    }

    static createAnime(anime) {
        LIST_ANIME.push(anime);
    }

    static deleteAnimeById(id) {
        let index = LIST_ANIME.findIndex(a => a.id == id);
        let deletedAnime;

        if (index > -1) {
            deletedAnime = LIST_ANIME[index];
            LIST_ANIME.splice(index, 1);
        } else {
            throw new NotFoundExeption("Anime not found!");
        }

        return deletedAnime;
    }

    static updateAnime(id, name, type, thumbnail, src, description, upload_date) {
        let foundAnime = DB_ANIME.find(a => a.id == id);

        if (foundAnime) {
            foundAnime.update(name, type, thumbnail, src, description, upload_date);
        } else {
            throw new NotFoundExeption("Anime not found!");
        }

       return foundAnime;
    }

    static filterBy(name, type) {
        const regex = new RegExp('.*' + name + ".*", 'i');
        let result = LIST_ANIME.filter(a => regex.match(a.name));

        if (type) {
            result = result.filter(a => a.type == type);
        }
        return result;
    }
}

module.exports = AnimeRepository;
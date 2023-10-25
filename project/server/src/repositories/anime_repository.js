const { LIST_ANIME } = require("../database/memory_db");
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

    static updateAnime(id, name, type, thumbnail, src, description, release_date) {
        let foundAnime = LIST_ANIME.find(a => a.id == id);

        if (foundAnime) {
            foundAnime.updateAnime(name, type, thumbnail, src, description, release_date);
        } else {
            throw new NotFoundExeption("Anime not found!");
        }

       return foundAnime;
    }

    static filterBy(keyword, type) {
        let result = LIST_ANIME;
        
        if (keyword != "") {
            const regex = new RegExp('.*' + keyword + ".*", 'i');
            result = result.filter(a => regex.test(a.name));
        }
        
        if (type) {
            console.log("type: " + type);
            result = result.filter(a => a.type == type);
        }
        
        return result;
    }

    static getRelatedList(id) {
        let result = LIST_ANIME.filter(a => a.id != id);

        if (result.length > 5) {
            result = result.slice(0, 5);
        }

        return result;
    }
}

module.exports = AnimeRepository;
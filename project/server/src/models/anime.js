class Anime {

    constructor(id, name, type, thumbnail, src, description, release_date) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.thumbnail = thumbnail;
        this.src = src;
        this.description = description;
        this.release_date = release_date;
    }

    static createFromJson(json) {
        return new Anime(json.id, json.name, json.type, json.thumbnail, json.src, json.description, json.release_date);
    }

    updateAnime(name, type, thumbnail, src, description, release_date) {
        this.name = name;
        this.type = type;
        this.src = src;
        this.description = description;
        this.release_date = release_date;

        if (thumbnail != undefined) {
            console.log("Anime.js: reassinge thumbnail: " + thumbnail);
            this.thumbnail = thumbnail;
        }
    }

}

module.exports = Anime;
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

    update(name, type, thumbnail, src, description, release_date) {
        this.name = name;
        this.type = type;
        this.thumbnail = thumbnail;
        this.src = src;
        this.description = description;
        this.release_date = release_date;
    }

}

module.exports = Anime;
class Anime {
    constructor(id, name, type, thumbnial, src, description, upload_date) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.thumbnial = thumbnial;
        this.src = src;
        this.description = description;
        this.upload_date =upload_date;
    }
}

module.exports = Anime;
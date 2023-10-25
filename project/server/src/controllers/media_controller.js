const path = require("path");

const getImage = (req, res, next) => {
    let filename = req.params.filename;
    res.sendFile(path.join(__dirname, "../../uploads/" + filename));
}

module.exports = {
    getImage
};
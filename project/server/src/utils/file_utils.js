const fs = require("fs");

const  jpegOnly = function(req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|JPG|JPEG)$/)) {
        req.fileValidationError = "You need to upload photo file (jpg).";
        return callback(null, false, req.fileValidationError);
    }
    callback(null, true);
}

const removeFile = (path) => {
    let filename = path.split("/")[1];
    fs.unlink("uploads/" + filename, () => {});
}

const renameFileToJpeg = (file) => {
    fs.renameSync("uploads/" + file.filename, "uploads/" + file.filename + ".jpg");
}

module.exports = {
    jpegOnly,
    renameFileToJpeg,
    removeFile
}

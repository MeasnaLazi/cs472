const { Exeption } = require("./exceptions");

const errorHandler = (err, req, res, next) => {
    if (err instanceof Exeption) {
        res.status(err.code).json(err.toJson());
    } else {
        res.status(500).send(err)
    }
};

module.exports = errorHandler;
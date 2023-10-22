const { UnAuthorizedExeption } = require("../exception/exceptions");

let whiteList = [
    "/users",
    "/homes",
    "/homes/detail",
    "/homes/filter"
];

const Auth = (req, res, next) => {

    if (whiteList.includes(req.url)) {
        next();
        return;
    }

    let fullToken = req.headers['authorization'] ?? undefined;
    if (!fullToken) {
        next(new UnAuthorizedExeption("No authorization token was found"));
        return;
    }

    if (!fullToken.includes("Bearer")) {
        next(new UnAuthorizedExeption("No authorization token was found"));
        return;
    }

    let tokens = fullToken.split(" ");
    if (tokens.length != 2) {
        next(new UnAuthorizedExeption("Invalid authorization token!"));
        return;
    }

    let token = tokens[1];
    if (token != "TOKEN_LOGIN_SUCCESSFUL") {
        next(new UnAuthorizedExeption("Invalid authorization token!"));
        return;
    }

    next();
}

module.exports = Auth;
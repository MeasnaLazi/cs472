const UserRepository = require("../repositories/user_repository");
const { InvalidFormatExeption } = require("../exception/exceptions");

const login = (req, res, next) => {
    let { username, password } = req.body;

    if (!username || !password) {
        next(InvalidFormatExeption("Please input all required data!"));
        return;
    }

    let token = UserRepository.login(username, password);

    res.status(200).json({ token });
}

module.exports = {
   login
};
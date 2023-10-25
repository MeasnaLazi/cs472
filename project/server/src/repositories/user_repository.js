const { LIST_USER } = require("../database/memory_db");
const { UnAuthorizedExeption } = require("../exception/exceptions");

class UserRepository {
    static login(username, password) {
        let findUser = LIST_USER.find(u => u.username == username);
        
        if (!findUser) {
            throw new UnAuthorizedExeption("Invalid Username or Password");
        }

        if (findUser.password != password) {
            throw new UnAuthorizedExeption("Invalid Username or Password");
        }

        return "TOKEN_LOGIN_SUCCESSFUL"
    }
}

module.exports = UserRepository;
class Exeption extends Error {
    constructor(name, message) {
        super(name, message);
        this.code = 1;
        this.name = name;
        this.message = message;
    }
    
    toJson() {
        return {
            message: this.message,
        }
    }
}

class NotFoundExeption extends Exeption {
    constructor(message) {
        super("NotFoundExeption", message);
        this.code = 404;
    }
}

class InternalExeption extends Exeption {
    constructor(message) {
        super("InternalExeption", message);
        this.code = 500;
    }
}

class UnAuthorizedExeption extends Exeption {
    constructor(message) {
        super("UnAuthorizedExeption", message);
        this.code = 401;
    }
}

class InvalidFormatExeption extends Exeption {
    constructor(message) {
        super("InvalidFormatExeption", message);
        this.code = 403;
    }
}

module.exports = {
    Exeption,
    NotFoundExeption,
    InternalExeption,
    UnAuthorizedExeption,
    InvalidFormatExeption
}


const HttpError = require('./HttpError');

class BadRequestError extends HttpError {
    constructor(message = 'Bad Request') {
        super(message, 400);
    }
}

class NotFoundError extends HttpError {
    constructor(message = 'Not Found') {
        super(message, 404);
    }
}

module.exports = {
    BadRequestError,
    NotFoundError,
};

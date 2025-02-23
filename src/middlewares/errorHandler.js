const errorHandler = (err, req, res, next) => {
    console.error(err);

    if (err instanceof Error && err.statusCode) {
        return res.status(err.statusCode).json({
            error: err.name,
            message: err.message,
        });
    }

    // Error genérico (500 Internal Server Error)
    res.status(500).json({
        error: 'InternalServerError',
        message: 'Something went wrong',
    });
};

module.exports = errorHandler;

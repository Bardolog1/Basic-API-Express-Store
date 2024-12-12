require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const requestLogger = require('./middlewares/requestLogger');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const createApp = () => {
    const app = express();

    // Middlewares globales
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(requestLogger); // Middleware para logs de solicitudes

    // Rutas
    app.use('/api', routes);

    // Middleware de manejo de errores
    app.use(errorHandler);

    return app;
};

module.exports = createApp;




















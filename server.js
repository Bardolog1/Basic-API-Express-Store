const createApp = require('./src/app.js');
const connectDB = require('./src/config/db.config');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // Conexión a la base de datos
        await connectDB();

        // Crear aplicación Express
        const app = createApp();

        // Iniciar servidor
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
};

startServer();

// Importar Express.js
const express = require('express');

// Crear una aplicación Express
const app = express();

// Definir el puerto en el que se ejecutará el servidor
const puerto = 3000;

// Ruta raíz
app.get('/', (req, res) => {
    // Responder con un mensaje de saludo
    res.send('¡Hola, mundo desde Express.js!');
});

// Ruta de ejemplo con parámetros
app.get('/saludo/:nombre', (req, res) => {
    // Obtener el parámetro 'nombre' de la URL
    const nombre = req.params.nombre;
    // Responder con un mensaje personalizado usando el parámetro
    res.send(`¡Hola, ${nombre}!`);
});

// Manejador de errores para rutas no encontradas
app.use((req, res, next) => {
    // Responder con un mensaje de error y un código de estado 404
    res.status(404).send('Ruta no encontrada');
});

// Iniciar el servidor y escuchar en el puerto especificado
app.listen(puerto, () => {
    // Imprimir un mensaje en la consola cuando el servidor se inicie correctamente
    console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});
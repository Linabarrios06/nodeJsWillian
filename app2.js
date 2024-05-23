// Importar el módulo "http" para crear un servidor HTTP
const http = require('http');

// Importar el módulo 'fs' para leer el archivo
const fs = require('fs');

// Crear un servidor HTTP
const servidor = http.createServer((req, res) => {
    console.log("Solicitud recibida"); // Imprimir un mensaje en la consola cuando se reciba una solicitud

    // Leer el contenido del archivo mensaje.txt
    fs.readFile('mensaje.txt', (err, data) => {
        if (err) { // Verificar si ocurrió un error al leer el archivo
            // Enviar una respuesta de error si ocurrió un error al leer el archivo
            res.writeHead(500, { "Content-Type": "text/plain" });
            // Configurar el encabezado de la respuesta con el código de estado 500 (Error interno del servidor)
            res.end('Error al leer el archivo'); // Enviar el mensaje de error como cuerpo de la respuesta
            console.error('Error al leer el archivo:', err); // Imprimir el error en la consola
        } else {
            // Enviar el contenido del archivo como respuesta HTTP si no ocurrió ningún error
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            // Configurar el encabezado de la respuesta con el código de estado 200 (Éxito) y el tipo de contenido 'text/plain'
            res.end(data); // Enviar el contenido del archivo como cuerpo de la respuesta.
        }
    });
});

// Iniciar el servidor y escuchar en el puerto 8880
servidor.listen(8880, () => {
    console.log('Servidor HTTP escuchando en el puerto 8880');
});

// Imprimir un mensaje en la consola cuando el servidor empiece a escuchar en el puerto 8880
console.log('Servidor HTTP escuchando en el puerto 8880');
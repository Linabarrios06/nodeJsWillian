// Importar el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Mensaje que se escribirá en el archivo
const mensaje =
'¡Hola, mundo desde Node.js!';

// Ruta y nombre del archivo a crear
const rutaArchivo = 'mensaje.txt';

// Escribir el mensaje en el archivo
fs.writeFile(rutaArchivo, mensaje, (err) => {
if (err) {
    console.error('Error al escribir en el archivo:', err);
} else {
    console.log(
    `Archivo ${rutaArchivo} creado y mensaje escrito: "${mensaje}"`
    );
}
});
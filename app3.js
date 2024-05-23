// Importar el módulo 'http' para crear un cliente HTTP
const http = require('http');

// Opciones de conexión al servidor HTTP
const opciones = {
    hostname: 'localhost', // Nombre del host del servidor al que nos conectaremos
    port: 8080, // Puerto del servidor al que nos conectaremos
    path: '/', // Ruta en el servidor a la que haremos la solicitud
    method: 'GET' // Método de solicitud que utilizaremos (en este caso, una solicitud GET)
};

// Realizar una solicitud HTTP GET al servidor
const solicitud = http.request(opciones, (res) => {
    let datos = ''; // Variable para almacenar los datos recibidos del servidor

    // Almacenar los datos recibidos en una cadena buffer de datos
    res.on("data", (chunk) => {
        datos += chunk; // Agregar los datos recibidos al final de la cadena
    });

    // Cuando se completa la recepción de datos, mostrarlos en la consola
    res.on('end', () => {
        console.log('Mensaje recibido del servidor:', datos); // Mostrar los datos recibidos en la consola
    });
});

// Manejar errores en la solicitud
solicitud.on('error', (err) => {
    console.error('Error en la solicitud:', err); // Mostrar errores de solicitud en la consola
});

// Finalizar la solicitud
solicitud.end(); // Indicar que hemos terminado de configurar la solicitud y enviarla al servidor
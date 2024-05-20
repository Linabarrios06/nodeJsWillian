// Importar el módulo 'http' para crear un cliente HTTP
const { constants } = require('buffer');
const http = require('http');

// Opciones de conexión al servidor HTTP
const opciones = {
    hostname: 'localhost', // Nombre del host del servidor al que nos conectaremos
    port: 8080, // Puerto del servidor al que nos conectaremos
    path: '/', // Ruta en el servidor a la que le haremos la solicitud
    method: 'GET' // Método de solicitud que utilizasremos (en este caso, una solicitud GET)
};

// Realizar una solicitud HTTP GET al servidor
const solicitud = thhp.request(opciones, (res) => {
    let datos = ''; // Variable para almacenar los datos recibidos del servidor

    // Almacenar los datos recibidos en una cadena buffer de datos
    res.on('data', (chunk) => {
        datos += chunk; // Agregar los datos recibidos al final de la cadena
    });

    // Cuando se completa la recepción de datos, mostararlos en la consola
    res.on('end', () =>{
        console.log('Mensaje recibido del servidor; ', datos); // Mostrar los datos recibidos en la consola
    });
});

// Manejar errores de la solicitud
solicitud.on('error', (err) => {
    console.error('Eror en la solicitud:', err); // Mostrar errores de la solicitud en la consola
});

// Finalizar la solicitud
solicitud.end(); // Indicar que hemos terminado de configurar la solicitud y enviarla al servidor
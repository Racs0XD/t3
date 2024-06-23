const http = require('http');  // Importa el modulo http de Node.js

const hostname = '0.0.0.0';   // Define el hostname en el cual el servidor escuchara todas las interfaces de red
const port = 3000;             // Define el puerto en el cual el servidor escuchara las peticiones HTTP

const server = http.createServer((req, res) => {
  // Crea un servidor HTTP y define lo que sucede cuando llega una solicitud (req) y se envia una respuesta (res)
  
  res.statusCode = 200;         // Establece el codigo de estado de la respuesta HTTP a 200 (OK)
  res.setHeader('Content-Type', 'text/plain');  // Establece el encabezado Content-Type de la respuesta a texto plano
  
  res.end('Hola Mundo\n');      // Envia la respuesta con el contenido "Hola Mundo\n"
});

server.listen(port, hostname, () => {
  // Hace que el servidor escuche las conexiones entrantes en el puerto y hostname especificados
  
  console.log(`Server running at http://${hostname}:${port}/`);  // Muestra un mensaje en la consola cuando el servidor esta listo para recibir peticiones
});

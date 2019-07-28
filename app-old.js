const http = require('http');
const colors = require('colors');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Gonzalo Vidal',
            edad: 27,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        // res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto en 8080...'.red);
const http = require('http')
// En el paramerro request se encuentran las solucitudes al servidor
//  El respondse es lo que el servidor le responde al cliente.

http
  .createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'})
    persona = {
      nombre: 'Sandra Zúñiga',
      profesion: 'Gestora Comunitaria',
    }
    res.write(JSON.stringify(persona))
    res.end()
  })
  .listen(8013)

console.log('Escuchando el puerto', 8013)

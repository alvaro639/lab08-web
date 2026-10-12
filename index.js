
require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Laboratorio 8</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #101827;
          color: white;
          display: grid;
          place-items: center;
          min-height: 100vh;
          margin: 0;
        }
        main {
          text-align: center;
          padding: 40px;
          border-radius: 20px;
          background: #1e293b;
        }
        h1 {
          color: #38bdf8;
        }
        p {
          color: #cbd5e1;
        }
      </style>
    </head>
    <body>
      <main>
        <h1>¡Aplicación desplegada!</h1>
        <p>Mi backend Node.js funciona correctamente.</p>
        <p>Laboratorio 8 - Desarrollo Web Avanzado</p>
      </main>
    </body>
    </html>
  `)
})

app.get('/api', (req, res) => {
  res.json({
    mensaje: 'Backend funcionando correctamente',
    estado: 'OK'
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`)
})

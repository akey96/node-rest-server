require('./config/config')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/user', (req, res) => {
  res.json({
    user: 'alex'
  })
})

app.delete('/user', (req, res) => {
  res.send('esto es delete')
})

app.post('/user', (req, res) => {
  let body = req.body

  if (body.nom === undefined) {
    res.status(400).json({
      ok: false,
      message: 'Error, no se hallo la variable nom'
    })
  } else {
    res.json(body)
  }
})

app.put('/user/:id', (req, res) => {
  let id = req.params.id
  res.json({
    id
  })
})

app.listen(process.env.PORT, () => console.log(`escuchando por el puerto ${process.env.PORT}`))

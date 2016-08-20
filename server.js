const express = require('express')
const path = require('path')

const app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './static/index.html'))
})

app.get('/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname, './static/bundle.js'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true,  useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('moongodb connected!')
})

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`The server is running in http://localhost:${port}`)
})

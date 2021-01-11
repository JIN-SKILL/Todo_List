const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection

// connection report
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongoDB connected.')
})


module.exports = db

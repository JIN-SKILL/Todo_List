const mongoose = require('mongoose')
const mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost/todo-list'
mongoose.connect(mongodb_uri, { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection

// connection report
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongoDB connected.')
})


module.exports = db

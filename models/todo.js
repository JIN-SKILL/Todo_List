const mongoose = require('mongoose')
const Schema = mongoose.Schema

const totdoSchema = new Schema({
  name:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', todoSchema)

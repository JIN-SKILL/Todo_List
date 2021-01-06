const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
const Todo = require('./models/todo')
const app = express()
const port = 2900

// add handlebars template
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
// start using template
app.set('view engine', 'hbs')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// db setting
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true , useUnifiedTopology: true })
const db = mongoose.connection

// connection report
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

// setting route
app.use(routes)


// listen
app.listen(port, () => {
  console.log(`The server is running in http://localhost:${port}`)
})

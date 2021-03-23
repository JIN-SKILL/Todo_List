const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000

// add handlebars template
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
// start using template
app.set('view engine', 'hbs')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// db setting
require('./config/mongoose')

// setting route
app.use(routes)

// listen
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})

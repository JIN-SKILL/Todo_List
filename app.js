const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Todo = require('./models/todo')
const app = express()
const port = 3000

// add handlebars template
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
// start using template
app.set('view engine', 'hbs')

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }))

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
app.get('/', (req, res) => {
  // get all todo data from db
  Todo.find() // 從資料庫查找出資料
    .lean() // 把資料轉成單純的JS物件
    .then(todos => res.render('index', { todos })) // 然後把資料送給前端樣版
    .catch(error => console.log(error)) // 如果發生意外, 執行錯誤處理
})

app.get('/todos/new', (req, res) => {
  return res.render('new')
})

app.post('/todos', (req, res) => {
  const name = req.body.name           // 從 req.body 拿出表單裡的 name 資料
  return Todo.create({ name })         // 存入資料庫
    .then(() => res.redirect('/'))     // 新增完成後導回首頁
    .catch(error => console.log(error))
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .lean()
    .then(todo => res.render('detail', { todo }))
    .catch(error => console.log(error))
})

// listen
app.listen(port, () => {
  console.log(`The server is running in http://localhost:${port}`)
})

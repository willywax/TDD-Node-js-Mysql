const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Routers

const commentRouter = require('./app/routes/comment')
const userRouter = require('./app/routes/user')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.use(bodyParser.json())

app.use('/comments', commentRouter)
app.use('/users', userRouter)

module.exports = app

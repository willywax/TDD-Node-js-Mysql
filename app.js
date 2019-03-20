const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//Routers
const taskRouter = require('./app/routes/appRoutes');
const commentRouter = require('./app/routes/comment');
const userRouter = require('./app/routes/users');




app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

//app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/tasks', taskRouter);
app.use('/comments',commentRouter);
app.use('/users',userRouter);
//app.use('/api/auth', userRouter);


module.exports = app;
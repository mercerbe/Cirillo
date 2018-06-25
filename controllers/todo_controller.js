//dependencies
const express = require('express');
//router
const todoRouter = express.Router();
const models = require('../models');

//sequelize connection
const sequelizeConnection = models.sequelize;
sequelizeConnection.sync();

//----------Routes--------------//
// //main page
todoRouter.get('/', (req, res) => {
  res.redirect('/index')
})

//all todos
todoRouter.get('/', (req, res) => {
  models.Todo.findAll({})
    .then((userTodos) => {
      let obj = { Todo: userTodos}
      res.render('index', obj)
    })
})



//exports
module.exports = todoRouter;

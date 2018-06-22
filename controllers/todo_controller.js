//dependencies
const express = require('express');
//router
const router = express.Router();
const models = require('../models');

//main page
router.get('/', (req, res) => {
  res.redirect('/index')
})

//all todos
router.get('/', (req, res) => {
  models.Todo.findAll({})
    .then((userTodos) => {
      let obj = { Todo: userTodos}
      res.render('index', obj)
    })
})



//exports
module.exports = router;

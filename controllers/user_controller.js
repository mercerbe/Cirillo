//dependencies
const express = require('express');
//router
const userRouter = express.Router();
const models = require('../models');

//sequelize connection
const sequelizeConnection = models.sequelize;
sequelizeConnection.sync();


//main page
userRouter.get('/', (req, res) => {
  res.redirect('/index')
})

//one user
userRouter.get('/users/:id', (req, res) => {
  models.User.findOne({
    where: {id: req.params.id}
  })
    .then((user) => {
      let obj = { User: user};
      res.render('index', obj)
    })
})


//exports
module.exports = userRouter;

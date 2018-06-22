//dependencies
const express = require('express');
//router
const router = express.Router();
const models = require('../models');


//main page
router.get('/', (req, res) => {
  res.redirect('/index')
})

//one user
router.get('/users/:id', (req, res) => {
  models.User.findOnd({
    where: {id: req.params.id}
  })
    .then((user) => {
      let obj = { User: user}
      res.render('index', obj)
    })
})


//exports
module.exports = router;

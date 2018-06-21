//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const db = require('./models');
const exphbs = require('express-handlebars');

//express setup
const app = express();
const PORT = process.env.PORT || 3000;

//data parsing via body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//handlebars view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//-----------------routing----------------------//
//static route
app.use(express.static('public'));

//routes to controllers
const userRouter = require('./controllers/user_controller.js');
const todoRouter = require('./controllers/todo_controller.js');
app.use('/', userRouter);
app.use('/', todoRouter);


//--------------sync sequelize server listen--------//

db.sequelize.sync()
  .then(() =>{
    app.listen(PORT, () => {
      console.log("app listening on port:", PORT);
    })
  })

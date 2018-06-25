//dependencies
const express = require("express");
const db = require('./models');
const bodyParser = require("body-parser");

//express setup
const app = express();
const PORT = process.env.PORT || 8080;

//static route
app.use(express.static('public'));

//data parsing via body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//-----------------routing----------------------//

//route to api
require('./routes/api-routes.js')(app);


//--------------sync sequelize server listen--------//

db.sequelize.sync({force: true})
  .then(() =>{
    app.listen(PORT, () => {
      console.log("app listening on port:", PORT);
    })
  })

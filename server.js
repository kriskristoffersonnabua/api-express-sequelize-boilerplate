const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/models')

require('dotenv').config();
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || 'development';

try {
  const app = express();

  if (ENV == 'development') {
    db.sequelize.sync({
      force: true
    }).then(() => {
      console.log("Drop and resync db")
    })
  }

  const corsOptions = {
    origin: 'http://localhost:8081'
  };

  app.use(cors(corsOptions));

  // parse requests of content-type - application/json
  app.use(bodyParser.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }))

  //define routes for api
  require('./app/routes')(app, db);

  app.listen(3000, () => {
    console.log("listening to port " + 3000);
  })
}
catch(e) {
  console.error(e);
}

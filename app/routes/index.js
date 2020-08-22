module.exports = (app, db) => {
  const router = require('express').Router();
  const {
    userController
  } = require('../controllers')(db);

  //user endpoints
  router.post("/user", userController.create)

  app.use('/api', router);
}

module.exports = (db) =>  {
  const User = db.user;
  const Op = db.Sequelize.Op;

  const actions = {}
  actions.create = (req, res) => {
    res.json({
      body
    })
  };

  actions.findAll = (req, res) => {
  };

  actions.findOne = (req, res) => {
  };

  actions.update = (req, res) => {
  };

  actions.delete = (req, res) => {
  };

  actions.deleteAll = (req, res) => {
  };

  actions.findAllPublished = (req, res) => {
  };

  return actions
}

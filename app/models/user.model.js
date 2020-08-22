module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
  });

  return User;
};


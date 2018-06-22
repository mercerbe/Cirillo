'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
      len: [1,140]
    }
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
      len: [8,32]
    }
  }
})
return User;
}

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define("Todo", {
  text: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
      len: [1,140]
    }
  },
  complete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})
return Todo;
}

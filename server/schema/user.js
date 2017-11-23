/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: ''
    },
    password: {
      type: DataTypes.CHAR(128),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};

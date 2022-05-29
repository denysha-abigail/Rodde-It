const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }

  // create fields/columns for User model
User.init(
    {
        //define id column
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      //define username column
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },

      //define email column
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      //define password
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6]
        }
      }
    },

{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
  );
  
  module.exports = User;
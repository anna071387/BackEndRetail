require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
// ? : is 
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PW, 
    {
      host: '127.0.0.1',
      dialect: 'mysql',

      // ASK QUESTION ABOUT THIS
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

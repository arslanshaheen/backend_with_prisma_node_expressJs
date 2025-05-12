// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize({
//   host: process.env.DB_HOST,
//    dialect: 'postgres',
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// });

// module.exports = sequelize;




const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'postgres',
  username: 'postgres',
  password: 'arslanAZ12@#',
  database: 'auth_db',
  port: 5432,
});

module.exports = sequelize;



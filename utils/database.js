const Sequlize = require('sequelize');

const DB_NAME = 'node-todo';
const USER_NAME = 'root';
const PASSWORD = 'inetlena_1976';

const sequelize = new Sequlize(DB_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

const { Sequelize } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.RDS_HOSTNAME,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  //database: process.env.RDS_NAME,
  port: process.env.RDS_PORT,
})
  
exports.sequelize = sequelize;
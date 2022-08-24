const sequelize = require('sequelize');

const seq = new sequelize('txclass', 'root', 'xL1210...', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000 // 10s之后断开
  },
  dialectOptions: {
    charset: 'utf8'
  }
});

module.exports = seq;
 
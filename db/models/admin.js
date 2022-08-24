const seq = require('../connections/mysql_connect'),
      { STRING } = require('../../config/db_config');

const Admin = seq.define('admin', {
  username: {
    comment: 'admin user name',
    type: STRING,
    allowNull: false
  },
  password: {
    comment: 'admin password',
    type: STRING,
    allowNull: false
  }
});

module.exports = Admin;
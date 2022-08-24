const seq = require('../mysql_connect'),
      { STRING, INT } = require('../../configs/db_config');

const Slider = seq.define('slider', {
  cid: {
    comment: 'slider id',
    type: STRING,
    allowNull: false
  },
  href: {
    comment: 'slider href',
    type: STRING,
    allowNull: false
  },
  imgUrl: {
    comment: 'slider img url',
    type: STRING,
    allowNull: false
  },
  title: {
    comment: 'slider title',
    type: STRING,
    allowNull: false
  },
  status: {
    comment: 'slider status',
    type: INT,
    allowNull: false,
    defaultValue: 1
  }
})

module.exports = Slider;
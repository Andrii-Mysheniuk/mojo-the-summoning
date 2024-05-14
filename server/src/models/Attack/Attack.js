const { db, DataTypes } = require('../../db/config')

const Attack = db.define('Attack', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  title: DataTypes.STRING,
  mojoCost: DataTypes.INTEGER,
  staminaCost: DataTypes.INTEGER
})

module.exports = {
  Attack
}

const { db, DataTypes } = require('../../db/config')

const Deck = db.define('Deck', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: DataTypes.STRING,
  xp: DataTypes.INTEGER
})

module.exports = {
  Deck
}

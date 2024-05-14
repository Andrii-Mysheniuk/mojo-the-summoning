const { db, DataTypes } = require('../../db/config')

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  username: DataTypes.STRING
})

module.exports = {
  User
}

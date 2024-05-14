const { User } = require('./User/User')
const { Deck } = require('./Deck/Deck')
const { Card } = require('./Card/Card')
const { Attack } = require('./Attack/Attack')

// import the rest of your models above

// set up the associations here
User.hasOne(Deck)
Deck.belongsTo(User)

Deck.hasMany(Card)
Card.belongsTo(Deck)

Card.belongsToMany(Attack, { through: 'CardAttack' })
Attack.belongsToMany(Card, { through: 'CardAttack' })

// and then export them all below
module.exports = {
  User,
  Deck,
  Card,
  Attack
}

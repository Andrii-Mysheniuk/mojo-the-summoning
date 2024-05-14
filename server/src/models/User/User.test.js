const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Deck } = require('../../models')
const { db } = require('../../db/config')

// define in global scope
let user
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ id: 1, username: 'testUser' })
  deck = await Deck.create({ id: 1, name: 'testDeck', xp: 100 })
  await user.setDeck(deck)
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

  it('has a username', async () => {
    expect(user.username).toBe('testUser')
  })

  it('has an associated deck', async () => {
    const userWithDeck = await User.findOne({ where: { username: 'testUser' }, include: Deck })
    expect(userWithDeck.Deck.name).toBe('testDeck')
  })
})

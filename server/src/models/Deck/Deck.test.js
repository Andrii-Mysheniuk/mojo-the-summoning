const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck, Card } = require('../../models')
const { db } = require('../../db/config')

let deck, card1, card2

beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'testDeck', xp: 100 })
  card1 = await Card.create({ name: 'Card 1', mojo: 10, stamina: 5 })
  card2 = await Card.create({ name: 'Card 2', mojo: 20, stamina: 10 })
  await deck.addCards([card1, card2])
})

afterAll(async () => await db.sync({ force: true }))

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

  it('has a name', async () => {
    expect(deck.name).toBe('testDeck')
  })

  it('contains multiple cards', async () => {
    const cardsInDeck = await deck.getCards()
    expect(cardsInDeck.length).toBe(2)
  })
})

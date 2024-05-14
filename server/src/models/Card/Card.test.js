const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('./Card')
const { db } = require('../../db/config')

let card

beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'Test Card' })
})

afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

  it('has a name', async () => {
    expect(card.name).toBe('Test Card')
  })

  // Add more tests as needed
})

const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack, Card } = require('../../models')
const { db } = require('../../db/config')

let attack1, attack2, card

beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ id: 1, name: 'Test Card', mojo: 10, stamina: 5 })
  attack1 = await Attack.create({ title: 'Test Attack 1', mojoCost: 5, staminaCost: 3 })
  attack2 = await Attack.create({ title: 'Test Attack 2', mojoCost: 8, staminaCost: 4 })
  await card.addAttacks([attack1, attack2])
})

afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack1).toHaveProperty('id')
    expect(attack2).toHaveProperty('id')
  })

  it('has a name', async () => {
    expect(attack1.title).toBe('Test Attack 1')
    expect(attack2.title).toBe('Test Attack 2')
  })

  it('has multiple associated attacks', async () => {
    const cardWithAttacks = await Card.findByPk(card.id, { include: Attack })

    console.log(cardWithAttacks)

    // Ensure the associations are correct
    expect(cardWithAttacks.Attacks.length).toBe(2)
    expect(cardWithAttacks.Attacks[0].title).toBe('Test Attack 1')
    expect(cardWithAttacks.Attacks[1].title).toBe('Test Attack 2')
  })
})

export class Cat {
  constructor(id: string, url: string, captureAt: Date) {
    this.id = id
    this.url = url
    this.captureAt = captureAt
    const random = Math.floor(Math.random() * 100)
    this.rarity = 1
    if (random < 80) this.rarity = 2
    if (random < 50) this.rarity = 3
    if (random < 10) this.rarity = 4
    if (random < 1) this.rarity = 5
  }

  id!: string
  url!: string
  captureAt!: Date
  rarity: number
}

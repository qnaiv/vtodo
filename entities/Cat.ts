export class Cat {
  constructor(id: string, url: string, captureAt: Date) {
    this.id = id
    this.url = url
    this.captureAt = captureAt
  }

  id!: string
  url!: string
  captureAt!: Date
}

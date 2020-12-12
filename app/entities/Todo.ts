import { v4 as uuidv4 } from 'uuid'

export class Todo {
  constructor(title: string) {
    this.id = uuidv4()
    this.title = title
    this.isDone = false
    this.createdAt = new Date()
    this.doneAt = null
  }

  id: string
  title: string
  isDone: boolean
  createdAt: Date
  doneAt: Date | null
}

import { v4 as uuidv4 } from 'uuid'
import { AmountOfIngredient } from './AmountOfIngredient'

/**
 * 食材
 */
export class Ingredient {
  constructor(arg: {
    id?: string
    name: string
    amount?: AmountOfIngredient
    created?: string
  }) {
    this.id = arg.id ?? uuidv4()
    this.name = arg.name ?? '不明な食材'
    this.amount = arg.amount ?? AmountOfIngredient.FULL
    this.createdAt = arg.created != null ? new Date(arg.created) : new Date()
  }

  id: string
  name: string
  amount: AmountOfIngredient
  createdAt: Date

  toggleAmount(): void {
    if (this.amount === AmountOfIngredient.EMPTY) {
      this.amount = AmountOfIngredient.FULL
      return
    }
    this.amount = this.amount + 1
  }
}

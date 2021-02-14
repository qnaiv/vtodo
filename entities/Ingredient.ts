import { v4 as uuidv4 } from 'uuid'

/**
 * 食材
 */
export class Ingredient {
  constructor(arg: {
    id?: string
    name: string
    amount?: number
    expirationDate?: string | null
    createdAt?: Date
  }) {
    this.id = arg.id ?? uuidv4()
    this.name = arg.name ?? '不明な食材'
    this.amount = arg.amount ?? 5
    this.expirationDate = arg.expirationDate ? arg.expirationDate : ''
    this.createdAt =
      arg.createdAt != null ? new Date(arg.createdAt) : new Date()
  }

  // 食材ID
  id: string
  // 食材名
  name: string
  // 残量
  amount: number
  // 賞味期限(YYYY/MM/DD)
  expirationDate: string

  // 作成日
  createdAt: Date

  /**
   * 食材の残量を切り替える
   * 実行するたびに残量が減っていく。現在の残量がEMPTYの場合、FULLに戻す。
   * @returns
   */
  // toggleAmount(): void {
  //   if (this.amount === AmountOfIngredient.EMPTY) {
  //     this.amount = AmountOfIngredient.FULL
  //     return
  //   }
  //   this.amount = this.amount + 1
  // }
}

export class IngredientSettings {
  constructor(
    orderCondition?: 'sortByCreatedAt' | 'sortByExpirationDate' | 'sortByAmount'
  ) {
    this.orderCondition = orderCondition ?? 'sortByCreatedAt'
  }

  orderCondition
}

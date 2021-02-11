import { Ingredient } from '../entities/Ingredient'

export class IngredientRepository {
  setIngredients(ingredients: Ingredient[]): void {
    localStorage.ingredients = JSON.stringify(ingredients)
  }

  getIngredients(): Ingredient[] {
    const ingredients: Array<any> = JSON.parse(localStorage.ingredients)
    return ingredients.map((ing: Ingredient) => new Ingredient(ing))
  }

  /**
   * 食材を更新する
   * @param ingredient 更新対象の食材
   * @returns 更新後の食材リスト
   */
  updateIngredient(ingredient: Ingredient): Array<Ingredient> {
    const ingredients = this.getIngredients()
    const ingIdx = ingredients.findIndex((ing) => ing.id === ingredient.id)
    ingredients[ingIdx] = ingredient

    this.setIngredients(ingredients)

    return ingredients
  }

  /**
   * 食材を削除する
   * @param ingredientId 削除対象の食材ID
   * @returns 削除後の食材リスト
   */
  deleteIngredient(ingredientId: string): Array<Ingredient> {
    const ingredients = this.getIngredients()
    const ingIdx = ingredients.findIndex((ing) => ing.id === ingredientId)
    ingredients.splice(ingIdx, 1)

    this.setIngredients(ingredients)
    return ingredients
  }

  isEmpty(): boolean {
    if (
      localStorage.ingredients === undefined ||
      localStorage.ingredients === null ||
      JSON.parse(localStorage.ingredients).length === 0
    ) {
      return true
    }
    return false
  }
}

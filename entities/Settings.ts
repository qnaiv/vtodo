import { IngredientSettings } from './IngredientSettings'

export class Settings {
  constructor(ingredientSettings?: IngredientSettings) {
    this.ingredientSettings = ingredientSettings ?? new IngredientSettings()
  }

  ingredientSettings: IngredientSettings
}

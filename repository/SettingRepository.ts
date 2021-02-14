import deepcopy from 'deepcopy'
import { IngredientSettings } from '~/entities/IngredientSettings'

export class SettingRepository {
  initialize() {
    localStorage.ingredientSettings ??= JSON.stringify(new IngredientSettings())
  }

  getIngredientSetting(): IngredientSettings {
    this.initialize()
    return deepcopy(JSON.parse(localStorage.ingredientSettings))
  }

  updateIngredientSetting(setting: IngredientSettings) {
    this.initialize()
    localStorage.ingredientSettings = JSON.stringify(setting)
  }
}

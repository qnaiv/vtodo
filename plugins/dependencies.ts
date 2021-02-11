import { Context, Inject } from '@nuxt/types/app'
import { TodoRepository } from '~/repository/TodoRepository'
import { CatRepository } from '~/repository/CatRepository'
import { IngredientRepository } from '~/repository/IngredientRepository'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (context: Context, inject: Inject) => {
  const todoRepository = new TodoRepository()
  inject('TodoRepository', todoRepository)

  const catRepository = new CatRepository()
  inject('CatRepository', catRepository)

  const ingredientRepository = new IngredientRepository()
  inject('IngredientRepository', ingredientRepository)
}

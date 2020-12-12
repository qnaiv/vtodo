import { Context, Inject } from '@nuxt/types/app'
import { TodoRepository } from '../service/TodoRepository'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (context: Context, inject: Inject) => {
  const todoRepository = new TodoRepository()
  inject('TodoRepository', todoRepository)
}

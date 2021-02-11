import { Todo } from '../entities/Todo'

export class TodoRepository {
  setTodos(todos: Todo[]): void {
    localStorage.todos = JSON.stringify(todos)
  }

  getTodos(): Todo[] {
    return JSON.parse(localStorage.todos)
  }

  isEmpty(): boolean {
    if (
      localStorage.todos === undefined ||
      localStorage.todos === null ||
      JSON.parse(localStorage.todos).length === 0
    ) {
      return true
    }
    return false
  }
}

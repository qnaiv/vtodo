<template>
  <v-row>
    <v-col cols="12" sm="12" md="4">
      <TodoList
        :title="'Todos'"
        :todos="newTodos"
        :on-delete-all="clearNewTodos"
        :on-click-todo="done"
        :empty-message="'TODOを登録してください。'"
      />
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <TodoList
        :title="'Done'"
        :todos="doneTodos"
        :on-delete-all="clearDoneTodos"
        :empty-message="'完了したTODOはありません。'"
      />
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-card flat class="cat-container">
        <v-subheader>Latest ねこ</v-subheader>
        <LatestCat ref="cat" class="px-5 pb-5" />
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text to="CatGallery">
            集めたねこを見る
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <SpeechRecognitionButton :onresult="recOnResult" />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LatestCat from '../components/LatestCat.vue'
import { Todo } from '../entities/Todo'
import { TodoRepository } from '../repository/TodoRepository'
import TodoList from '../components/TodoList.vue'
import SpeechRecognitionButton from '~/components/SpeechRecognitionButton.vue'

declare let webkitSpeechRecognition: any

@Component({
  components: {
    LatestCat,
    SpeechRecognitionButton,
    TodoList,
  },
})
export default class Index extends Vue {
  todos: Array<Todo> = []
  rec: any
  $TodoRepository!: TodoRepository
  $refs!: any

  recOnResult(e: any) {
    this.todos.push(new Todo(e.results[0][0].transcript))
    this.$TodoRepository.setTodos(this.todos)
  }

  created() {
    if (!this.$TodoRepository.isEmpty()) {
      this.todos = this.$TodoRepository.getTodos()
    }
  }

  get newTodos() {
    return this.todos.filter((t) => !t.isDone)
  }

  get doneTodos() {
    return this.todos.filter((t) => t.isDone)
  }

  done(todoId: string) {
    const todo = this.todos.find((t) => t.id === todoId)
    if (todo) {
      todo.isDone = true
      todo.doneAt = new Date()
      this.$TodoRepository.setTodos(this.todos)

      this.$refs.cat.setRandomCatImage()
    }
  }

  clearDoneTodos() {
    this.todos = this.todos.filter((t) => t.isDone === false)
    this.$TodoRepository.setTodos(this.todos)
  }

  clearNewTodos() {
    this.todos = this.todos.filter((t) => t.isDone === true)
    this.$TodoRepository.setTodos(this.todos)
  }
}
</script>
<style scoped>
.todo-title {
  text-overflow: inherit;
  white-space: unset;
}
.todo-list {
  background-color: #fffffe;
}
</style>

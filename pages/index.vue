<template>
  <v-row>
    <v-col cols="12" sm="12" md="4">
      <v-card flat class="todo-container">
        <v-list class="todo-list" subheader two-line>
          <v-subheader>Todos</v-subheader>
          <v-list-item
            v-for="todo in newTodos"
            :key="todo.id"
            @click="done(todo.id)"
          >
            <v-list-item-content>
              <v-list-item-title
                class="todo-title"
                v-text="todo.title"
              ></v-list-item-title>
              <v-list-item-subtitle>
                {{ todo.createdAt | moment }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey">mdi-check</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-list-item v-if="newTodos.length == 0">
            <v-list-item-content>
              <v-list-item-title>TODOを登録してください。</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="clearNewTodos()">
            Clear all
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-card flat class="todo-container">
        <v-list class="todo-list" subheader two-line>
          <v-subheader>Done</v-subheader>
          <v-list-item v-for="todo in doneTodos" :key="todo.id">
            <v-list-item-content>
              <v-list-item-title
                class="todo-title"
                v-text="todo.title"
              ></v-list-item-title>
              <v-list-item-subtitle>
                {{ todo.doneAt | moment }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="doneTodos.length == 0">
            <v-list-item-content>
              <v-list-item-title>完了したTODOはありません。</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="clearDoneTodos()">
            Clear all
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-card flat class="cat-container">
        <v-subheader>今日のねこ</v-subheader>
        <Cat ref="cat" class="px-5 pb-5" />
      </v-card>
    </v-col>
    <v-fab-transition>
      <v-btn
        fixed
        fab
        bottom
        right
        :color="recButtonColor"
        @click="recognizeVoice"
      >
        <v-icon>mdi-microphone</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Cat from '../components/Cat.vue'
import { Todo } from '../entities/Todo'
import { TodoRepository } from '../service/TodoRepository'

declare let webkitSpeechRecognition: any

@Component({
  components: {
    Cat,
  },
})
export default class Index extends Vue {
  isRecording: boolean = false
  todos: Array<Todo> = []
  rec: any
  $TodoRepository!: TodoRepository
  $refs!: any

  created() {
    const rec = new webkitSpeechRecognition()

    rec.continuous = false
    rec.interimResults = false
    rec.lang = 'ja-JP'
    rec.maxAlternatives = 1
    rec.onresult = (e: any) => {
      this.todos.push(new Todo(e.results[0][0].transcript))
      this.$TodoRepository.setTodos(this.todos)
      rec.stop()
    }

    rec.onaudiostart = () => {
      this.isRecording = true
    }
    rec.onaudioend = () => {
      this.isRecording = false
    }
    this.rec = rec

    if (!this.$TodoRepository.isEmpty()) {
      this.todos = this.$TodoRepository.getTodos()
    }
  }

  get recButtonColor() {
    return this.isRecording ? '#eebbc3' : '#fffffe'
  }

  get newTodos() {
    return this.todos.filter((t) => !t.isDone)
  }

  get doneTodos() {
    return this.todos.filter((t) => t.isDone)
  }

  recognizeVoice() {
    const rec = this.rec
    if (this.isRecording) {
      this.isRecording = false
      rec.stop()
    } else {
      rec.start() // 認識を開始します
    }
  }

  done(todoId: string) {
    const todo = this.todos.find((t) => t.id === todoId)
    if (todo) {
      todo.isDone = true
      todo.doneAt = new Date()
      this.$TodoRepository.setTodos(this.todos)
      console.log(this.$refs)

      this.$refs.cat.setRandomCatImage()
    }
  }

  removeTodo(todoId: string) {
    this.todos = this.todos.filter((t: Todo) => t.id !== todoId)
    this.$TodoRepository.setTodos(this.todos)
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

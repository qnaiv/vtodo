<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="12">
      <v-card flat>
        <v-list subheader two-line>
          <v-subheader>Todos</v-subheader>

          <v-list-item v-for="todo in todos" :key="todo.id">
            <v-list-item-content>
              <v-list-item-title
                v-text="todo.title"
                class="todo-title"
              ></v-list-item-title>

              <v-list-item-subtitle>
                {{ todo.createdAt | moment }}</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click="removeTodo(todo.id)">
                <v-icon color="grey">mdi-check</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-list-item v-if="todos.length == 0">
            <v-list-item-content>
              <v-list-item-title>TODOを登録してください。</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
    <v-btn
      absolute
      fab
      bottom
      right
      :color="recButtonColor"
      @click="recognizeVoice"
    >
      <v-icon>mdi-microphone</v-icon>
    </v-btn>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid'

export interface IWindow extends Window {
  webkitSpeechRecognition: any
}

class Todo {
  constructor(title: string) {
    this.id = uuidv4()
    this.title = title
    this.isDone = false
    this.createdAt = new Date()
  }
  id: string
  title: string
  isDone: boolean
  createdAt: Date
  doneAt: Date
}

export default Vue.extend({
  data() {
    return {
      isRecording: false,
      todos: [],
    }
  },
  computed: {
    recButtonColor() {
      return this.isRecording ? 'pink' : 'gray'
    },
    webkitSpeechRecognition() {
      const { webkitSpeechRecognition }: IWindow = <IWindow>(<unknown>window)
      return new webkitSpeechRecognition()
    },
  },
  created() {
    const rec = this.webkitSpeechRecognition
    rec.continuous = false // 後述
    rec.interimResults = false // trueにすると認識途中の結果も返す
    rec.lang = 'ja-JP' // 言語を指定する
    rec.maxAlternatives = 1 // 結果候補の最大数(デフォルトは1)
    rec.onresult = (e: any) => {
      // 認識結果がSpeechRecognitionEventインスタンスとして渡されます
      // 認識した言葉を表示
      console.log(e.results[0][0].transcript)
      this.todos.push(new Todo(e.results[0][0].transcript))
      rec.stop() // 認識が完了したら終了する
    }

    rec.onaudiostart = () => {
      this.isRecording = true
    }
    rec.onaudioend = () => {
      this.isRecording = false
    }
  },
  methods: {
    recognizeVoice() {
      const rec = this.webkitSpeechRecognition
      if (this.isRecording) {
        this.isRecording = false
        rec.stop()
      } else {
        rec.start() // 認識を開始します
      }
    },
    removeTodo(todoId: string) {
      this.todos = this.todos.filter((t: Todo) => t.id !== todoId)
    },
  },
})
</script>
<style scoped>
.todo-title {
  text-overflow: inherit;
  white-space: unset;
}
</style>
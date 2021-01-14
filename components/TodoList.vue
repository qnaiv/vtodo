<template>
  <v-card flat class="todo-container">
    <v-list class="todo-list" subheader two-line>
      <v-subheader>{{ title }}</v-subheader>
      <v-list-item
        v-for="todo in todos"
        :key="todo.id"
        @click="invokeOnClickTodo(todo.id)"
      >
        <v-list-item-content>
          <v-list-item-title
            class="todo-title"
            v-text="todo.title"
          ></v-list-item-title>
          <v-list-item-subtitle>
            <span v-if="todo.doneAt">{{ todo.doneAt | moment }} </span>
            <span v-else>{{ todo.createdAt | moment }} </span>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn v-if="onClickTodo !== undefined" icon>
            <v-icon color="grey">mdi-check</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item v-if="todos.length == 0">
        <v-list-item-content>
          <v-list-item-title>{{ emptyMessage }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div v-if="onDeleteAll">
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text v-if="onDeleteAll" @click="onDeleteAll()">
        Delete all
      </v-btn>
    </v-card-actions>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Todo } from '~/entities/Todo'

@Component
export default class TodoList extends Vue {
  @Prop({ type: String, required: true })
  title!: String

  @Prop({ type: Array, required: true })
  todos!: Array<Todo>

  @Prop({ type: String, required: true })
  emptyMessage!: String

  @Prop({ type: Function })
  onDeleteAll?: Function

  @Prop({ type: Function })
  onClickTodo?: Function

  invokeOnClickTodo(todoId: String) {
    if (this.onClickTodo === undefined) {
      return
    }
    this.onClickTodo(todoId)
  }
}
</script>

<style lang="scss" scoped>
.v-list-item__title,
.v-list-item__subtitle {
  white-space: pre-wrap;
}
</style>

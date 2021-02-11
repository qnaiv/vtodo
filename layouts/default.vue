<template>
  <v-app dark>
    <v-main class="mb-12">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-app-bar id="app-menu" fixed dense bottom>
      <nuxt-link to="/">
        <v-btn icon color="blue darken-2">
          <v-icon>mdi-text-box-check</v-icon>
        </v-btn>
      </nuxt-link>
      <nuxt-link to="ingredients">
        <v-btn icon color="green darken-2">
          <v-icon>mdi-food</v-icon>
        </v-btn>
      </nuxt-link>
      <nuxt-link to="neko">
        <v-btn icon color="orange darken-2">
          <v-icon>mdi-cat</v-icon>
        </v-btn>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <nuxt-link to="/" class="orange--text"> nekotodo </nuxt-link>
      </v-toolbar-title>
    </v-app-bar>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Default extends Vue {
  clipped = false
  drawer = false
  fixed = false
  items = [
    { icon: 'mdi-apps', title: 'Welcome', to: '/' },
    { icon: 'mdi-chart-bubble', title: 'Inspire', to: '/inspire' },
  ]

  miniVariant = false
  right = true
  rightDrawer = false
  title = 'Vuetify.js'
}
</script>

<style scoped>
#app-menu a {
  text-decoration: none;
}
.v-application {
  background-color: #e2b078 !important;
}
</style>

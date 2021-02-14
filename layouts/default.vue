<template>
  <v-app dark>
    <v-main class="mb-12">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation color="teal" grow fixed>
      <v-btn to="/">
        <span> Todo </span>
        <v-icon>mdi-text-box-check</v-icon>
      </v-btn>
      <v-btn to="ingredients">
        <span>食材</span>
        <v-icon>mdi-food</v-icon>
      </v-btn>
      <v-btn to="neko">
        <span>neko</span>
        <v-icon>mdi-cat</v-icon>
      </v-btn>
    </v-bottom-navigation>
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

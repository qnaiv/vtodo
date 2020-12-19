<template>
  <v-app dark>
    <v-app-bar color="primary" dense dark>
      <v-toolbar-title>nekotodo</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
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

<style>
.v-application {
  background-color: #232946 !important;
}
</style>

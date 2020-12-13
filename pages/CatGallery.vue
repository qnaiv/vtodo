<template>
  <v-card class="pa-5">
    <v-row>
      <v-col>
        <p>集めたねこの数: {{ cats.length }} / 151 匹</p>
        <v-btn depressed color="primary" to="/"> ホームへ戻る </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="cat in cats" :key="cat.src" cols="6" sm="6" md="3">
        <img :src="cat.src" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CatRepository } from '~/repository/CatRepository'

@Component
export default class CatGallery extends Vue {
  $CatRepository!: CatRepository
  cats!: Array<any>

  created() {
    this.cats = this.$CatRepository.getCats().map((cat) => {
      return {
        src: cat.url,
        msrc: cat.url,
      }
    })
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
}
</style>

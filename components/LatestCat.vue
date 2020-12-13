<template>
  <div id="cat">
    <img v-if="latestCat" class="cat-image" :src="latestCat.url" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios, { AxiosResponse } from 'axios'
import { Cat } from '~/entities/Cat'
import { CatRepository } from '~/repository/CatRepository'

interface CatResult {
  id: string
  url: string
  width: string
  height: string
}

@Component
export default class LatestCat extends Vue {
  latestCat: Cat = new Cat('', '', new Date())
  $CatRepository!: CatRepository

  created() {
    if (this.$CatRepository.isEmpty()) {
      this.setRandomCatImage()
    } else {
      this.latestCat = this.$CatRepository.getLatestCat()
    }
  }

  async setRandomCatImage(): Promise<void> {
    const catResults: AxiosResponse<Array<CatResult>> = await axios.get(
      'https://api.thecatapi.com/v1/images/search'
    )

    const cats = this.$CatRepository.getCats()
    cats.unshift(
      new Cat(catResults.data[0].id, catResults.data[0].url, new Date())
    )
    if (cats.length > this.$CatRepository.MaxCatSize) {
      cats.pop()
    }

    this.$CatRepository.setCats(cats)

    this.latestCat = this.$CatRepository.getLatestCat()
  }
}
</script>

<style scoped>
.cat-image {
  max-width: 500px;
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}
</style>

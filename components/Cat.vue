<template>
  <div id="cat">
    <img class="cat-image" :src="catImageUrl" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios, { AxiosResponse } from 'axios'

interface CatResult {
  id: string
  url: string
  width: string
  height: string
}

@Component
export default class Cat extends Vue {
  catImageUrl: string = ''

  created() {
    this.setRandomCatImage()
  }

  async setRandomCatImage(): Promise<void> {
    console.log('CAT!!!')

    const catResults: AxiosResponse<Array<CatResult>> = await axios.get(
      'https://api.thecatapi.com/v1/images/search'
    )
    this.catImageUrl = catResults.data[0].url
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

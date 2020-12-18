<template>
  <div id="cat">
    <img v-if="latestCat" class="cat-image" :src="latestCat.url" />

    <v-dialog v-model="catDialog" width="80%" transition="Fab">
      <v-card>
        <v-card-title>新しいねこ</v-card-title>
        <v-card-text>
          <img :src="latestCat.url" class="cat-dialog-image" />
          <span>{{ latestCat.captureAt | moment }}</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="catDialog = false">閉じる</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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

  catDialog: boolean = false

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

    this.catDialog = true
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
.cat-dialog-image {
  width: 100%;
  max-height: 60vh;
  object-fit: cover;
}
</style>

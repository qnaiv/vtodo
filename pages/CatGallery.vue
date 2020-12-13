<template>
  <v-card class="pa-5">
    <v-row>
      <v-col>
        <p>集めたねこの数: {{ cats.length }} 匹</p>
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
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import { CatRepository } from '~/repository/CatRepository'

@Component({
  components: {},
})
export default class CatGallery extends Vue {
  $CatRepository!: CatRepository
  cats!: Array<any>

  // catImages(): Array<any> {
  //   console.log('catImages!!')

  //   const test = this.cats.map((cat) => {
  //     return {
  //       thumb: cat.url,
  //       src: cat.url,
  //     }
  //   })
  //   console.log(test)

  //   return test
  // }

  created() {
    this.cats = this.$CatRepository.getCats().map((cat) => {
      return {
        src: cat.url,
        msrc: cat.url,
      }
    })
    console.log(this.cats)
  }

  handleClose() {
    console.log('aaa')
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

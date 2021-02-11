<template>
  <v-row>
    <v-col v-for="ing in ingredients" :key="ing.id" cols="12" sm="4" md="3">
      <ingredient-item
        :ingredient="ing"
        :on-delete="deleteIngredient"
        :on-update="updateIngredient"
      />
    </v-col>
    <SpeechRecognitionButton :onresult="recOnResult" />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { IngredientRepository } from '../repository/IngredientRepository'
import IngredientItem from '~/components/IngredientItem.vue'
import { Ingredient } from '~/entities/Ingredient'

@Component({
  components: {
    IngredientItem,
  },
})
export default class IngredientsManagement extends Vue {
  ingredients: Array<Ingredient> = []
  $IngredientRepository!: IngredientRepository

  created() {
    if (!this.$IngredientRepository.isEmpty()) {
      this.ingredients = this.$IngredientRepository.getIngredients()
    }
  }

  recOnResult(e: any) {
    this.ingredients.push(new Ingredient({ name: e.results[0][0].transcript }))
    this.$IngredientRepository.setIngredients(this.ingredients)
  }

  updateIngredient(ingredient: Ingredient): void {
    this.ingredients = this.$IngredientRepository.updateIngredient(ingredient)
  }

  deleteIngredient(ingredientId: string): void {
    this.ingredients = this.$IngredientRepository.deleteIngredient(ingredientId)
  }
}
</script>

<style></style>

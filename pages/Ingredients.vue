<template>
  <v-row>
    <v-col col="12" sm="12" class="text-right">
      <v-icon large color="white" @click="isOpenSettingDialog = true">
        mdi-tune
      </v-icon>
    </v-col>
    <v-col
      v-for="ing in sortedIngredients"
      :key="ing.id"
      cols="12"
      sm="6"
      md="3"
    >
      <ingredient-item
        :ingredient="ing"
        :on-delete="deleteIngredient"
        :on-update="updateIngredient"
      />
    </v-col>
    <SpeechRecognitionButton :onresult="recOnResult" />
    <IngredientSettingDialog
      :is-open.sync="isOpenSettingDialog"
      :on-save="onSaveSetting"
    />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { IngredientRepository } from '../repository/IngredientRepository'
import IngredientItem from '~/components/IngredientItem.vue'
import { Ingredient } from '~/entities/Ingredient'
import IngredientSettingDialog from '~/components/IngredientSettingDialog.vue'
import { SettingRepository } from '~/repository/SettingRepository'
import { IngredientSettings } from '~/entities/IngredientSettings'

@Component({
  components: {
    IngredientItem,
    IngredientSettingDialog,
  },
})
export default class IngredientsManagement extends Vue {
  ingredients: Array<Ingredient> = []
  $IngredientRepository!: IngredientRepository
  $SettingRepository!: SettingRepository
  ingredientSetting: IngredientSettings = new IngredientSettings()
  isOpenSettingDialog: boolean = false

  created() {
    this.ingredientSetting = this.$SettingRepository.getIngredientSetting()
    this.ingredients = this.$IngredientRepository.getIngredients()
  }

  get sortedIngredients(): Array<Ingredient> {
    const ings = this.ingredients
    const setting = this.ingredientSetting
    if (setting.orderCondition === 'sortByExpirationDate') {
      return ings.sort((ingA, ingB) => {
        if (!ingA.expirationDate) return 1
        if (!ingB.expirationDate) return -1
        if (ingA.expirationDate > ingB.expirationDate) return 1
        return -1
      })
    } else if (setting.orderCondition === 'sortByAmount') {
      return ings.sort((ingA, ingB) => {
        if (ingA.amount < ingB.amount) return -1
        return 1
      })
    } else {
      return ings.sort((ingA, ingB) => {
        if (ingA.createdAt < ingB.createdAt) return -1
        return 1
      })
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

  onSaveSetting(setting: IngredientSettings) {
    this.ingredientSetting = setting
  }
}
</script>

<style></style>

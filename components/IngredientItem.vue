<template>
  <v-card flats @click="toggleAmount">
    <v-card-text>
      <p class="display-1 text--primary">
        {{ ingredient.name }}
      </p>
      <v-progress-linear
        :color="amountOfIngredient.color"
        height="10"
        :value="amountOfIngredient.value"
        :striped="amountOfIngredient.striped"
      ></v-progress-linear>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn icon @click="deleteIngredient">
        <v-icon> mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { AmountOfIngredient } from '~/entities/AmountOfIngredient'
import { Ingredient } from '~/entities/Ingredient'

@Component
export default class IngredientItem extends Vue {
  @Prop({ type: Ingredient, required: true })
  readonly ingredient!: Ingredient

  @Prop({ type: Function, required: true })
  onToggleAmount?: Function

  @Prop({ type: Function, required: true })
  onDelete?: Function

  created() {}

  get amountOfIngredient() {
    let color = 'green'
    let value = 100
    let striped = false

    if (this.ingredient.amount === AmountOfIngredient.MID) {
      color = 'yellow darken-4'
      value = 50
    } else if (this.ingredient.amount === AmountOfIngredient.LOW) {
      color = 'deep-orange darken-4'
      value = 20
    } else if (this.ingredient.amount === AmountOfIngredient.EMPTY) {
      color = 'grey'
      value = 100
      striped = true
    }

    return {
      color,
      value,
      striped,
    }
  }

  toggleAmount() {
    if (this.onToggleAmount == null) {
      return
    }
    this.onToggleAmount(this.ingredient)
  }

  deleteIngredient() {
    if (this.onDelete == null) {
      return
    }
    this.onDelete(this.ingredient.id)
  }
}
</script>
<style></style>

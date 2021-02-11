<template>
  <v-card flats>
    <v-card-text>
      <p class="display-1 text--primary">
        {{ ingredient.name }}
      </p>
      <v-progress-linear
        :color="amountOfIngredient.color"
        height="10"
        :value="amountOfIngredient.value"
        :striped="amountOfIngredient.striped"
        @click="toggleAmount"
      ></v-progress-linear>
    </v-card-text>
    <v-card-actions>
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="ingredient.expirationDate"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="ingredient.expirationDate"
            :class="{ expired: isExpired }"
            label="賞味期限"
            prepend-icon="mdi-calendar-check-outline"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="ingredient.expirationDate" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
          <v-btn text color="primary" @click="test(ingredient.expirationDate)">
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
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
  onUpdate?: Function

  @Prop({ type: Function, required: true })
  onDelete?: Function

  modal: boolean = false

  created() {}

  get refs(): any {
    return this.$refs
  }

  get isExpired(): boolean {
    const date = new Date(this.ingredient.expirationDate)
    const today = new Date()
    return date < today
  }

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
    if (this.onUpdate == null) {
      return
    }
    this.ingredient.toggleAmount()
    this.onUpdate(this.ingredient)
  }

  deleteIngredient() {
    if (this.onDelete == null) {
      return
    }
    this.onDelete(this.ingredient.id)
  }

  test(date: any) {
    this.refs.dialog.save(date)
    if (this.onUpdate == null) {
      return
    }
    this.onUpdate(this.ingredient)
  }
}
</script>
<style>
.expired .theme--light.v-label {
  color: #ea6464 !important;
}
.expired .theme--light.v-icon {
  color: #ea6464 !important;
}
.expired input {
  color: #ea6464 !important;
}
</style>

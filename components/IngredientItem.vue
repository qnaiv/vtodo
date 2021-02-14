<template>
  <v-card flats>
    <v-card-text class="pb-0">
      <p class="headline text--primary">
        {{ ingredient.name }}
      </p>
      <v-rating
        v-model="ingredient.amount"
        clearable
        class="justify-center"
        @input="updateIngredient()"
      >
        <template v-slot:item="props">
          <v-icon
            :color="props.isFilled ? amountColor : 'grey lighten-2'"
            @click="props.click"
          >
            mdi-cube-outline
          </v-icon>
        </template>
      </v-rating>
    </v-card-text>
    <v-card-actions class="pt-0">
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
          <v-btn
            text
            color="primary"
            @click="saveDialog(ingredient.expirationDate)"
          >
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

  get amountColor() {
    if (this.ingredient.amount >= 5) {
      return 'green'
    } else if (this.ingredient.amount === 4) {
      return 'light-green'
    } else if (this.ingredient.amount === 3) {
      return 'yellow darken-2'
    } else if (this.ingredient.amount === 2) {
      return 'deep-orange'
    } else if (this.ingredient.amount === 1) {
      return 'deep-orange darken-4'
    } else {
      return 'grey'
    }
  }

  // toggleAmount() {
  //   if (this.onUpdate == null) {
  //     return
  //   }
  //   this.ingredient.toggleAmount()
  //   this.onUpdate(this.ingredient)
  // }

  updateAmount() {}

  deleteIngredient() {
    if (this.onDelete == null) {
      return
    }
    this.onDelete(this.ingredient.id)
  }

  updateIngredient() {
    if (this.onUpdate == null) {
      return
    }
    this.onUpdate(this.ingredient)
  }

  saveDialog(date: any) {
    this.refs.dialog.save(date)
    this.updateIngredient()
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

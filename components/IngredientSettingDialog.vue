<template>
  <v-dialog v-model="isOpen" persistent max-width="500">
    <v-card>
      <v-card-title class="headline"> 食材管理設定 </v-card-title>
      <v-card-text>
        <v-radio-group v-model="ingredientSettingsTmp.orderCondition" column>
          <template v-slot:label>
            <div>並び順</div>
          </template>
          <v-radio
            label="賞味期限の近い順に表示する"
            value="sortByExpirationDate"
          ></v-radio>
          <v-radio
            label="残量が少ない順に表示する"
            value="sortByAmount"
          ></v-radio>
          <v-radio label="登録日順に表示する" value="sortByCreatedAt"></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="" text @click="closeDialog"> 閉じる </v-btn>
        <v-btn color="success" @click="save"> 保存 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { IngredientSettings } from '~/entities/IngredientSettings'
import { SettingRepository } from '~/repository/SettingRepository'

@Component
export default class IngredientSettingDialog extends Vue {
  @Prop({ type: Boolean, required: true })
  isOpen: boolean = false

  @Prop({ type: Function, required: true })
  onSave!: Function

  @Watch('isOpen')
  opened() {
    if (this.isOpen) {
      this.ingredientSettingsTmp = this.$SettingRepository.getIngredientSetting()
    }
  }

  orderCondition: string = 'sortByCreatedAt'
  $SettingRepository!: SettingRepository
  ingredientSettingsTmp!: IngredientSettings

  created() {
    this.ingredientSettingsTmp = this.$SettingRepository.getIngredientSetting()
  }

  closeDialog() {
    // this.ingredientSettingsTmp = this.$SettingRepository.getIngredientSetting()
    this.$emit('update:isOpen', false)
  }

  save() {
    this.$SettingRepository.updateIngredientSetting(this.ingredientSettingsTmp)
    this.onSave(this.ingredientSettingsTmp)
    this.$emit('update:isOpen', false)
  }
}
</script>

<style></style>

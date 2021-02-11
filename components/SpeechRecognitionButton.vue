<template>
  <v-fab-transition>
    <v-btn
      fixed
      fab
      bottom
      right
      class="mb-12"
      :color="recButtonColor"
      @click="recognizeVoice"
    >
      <v-icon>mdi-microphone</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

declare let webkitSpeechRecognition: any

@Component
export default class SpeechRecognitionButton extends Vue {
  @Prop({ type: Function, required: true })
  onresult!: Function

  rec: any
  isRecording: boolean = false

  created() {
    const rec = new webkitSpeechRecognition()

    rec.continuous = false
    rec.interimResults = false
    rec.lang = 'ja-JP'
    rec.maxAlternatives = 1

    rec.onresult = (e: any) => {
      this.onresult(e)
      rec.stop()
    }

    rec.onaudiostart = () => {
      this.isRecording = true
    }
    rec.onaudioend = () => {
      this.isRecording = false
    }

    this.rec = rec
  }

  get recButtonColor() {
    return this.isRecording ? '#eebbc3' : '#fffffe'
  }

  recognizeVoice() {
    const rec = this.rec
    if (this.isRecording) {
      this.isRecording = false
      rec.stop()
    } else {
      rec.start() // 認識を開始します
    }
  }
}
</script>

<style lang="scss" scoped></style>

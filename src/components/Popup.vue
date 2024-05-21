<template>
  <div v-if="analysisResult" class="foggy">
    <v-card class="popup-card" title="Counter Speech">
      <v-card-text>{{ analysisResult }}</v-card-text>
      <v-card-actions>
        <v-row justify="center">
          <v-col cols="4" class="d-flex justify-center">
            <v-btn text @click="closeDialog">Close Dialog</v-btn>
          </v-col>
          <v-col cols="4" class="d-flex justify-center">
            <v-btn @click="generateCounterSpeech">Refresh</v-btn>
          </v-col>
          <v-col cols="4" class="d-flex justify-center">
            <v-btn text @click="copyToClipboard">Copy</v-btn>
          </v-col>
          <v-col cols="4" class="d-flex justify-center">
            <v-btn text @click="handleReplyInteraction">Reply</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useInteractionHandlers } from '../../public/interactionHandlers.js';

const props = defineProps({
  analysisResult: String
});

const { closeDialog, copyToClipboard, generateCounterSpeech, handleReplyInteraction } = useInteractionHandlers(props);
</script>

<style scoped>
.popup-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  min-width: 300px;
  min-height: 200px;
}

.foggy {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}
</style>

<template>
  <!-- <v-btn style="width:200px;height:30px;font-size:15px;" to="/hatespeech" variant="outlined">Continue as a guest</v-btn> -->

  <!-- Permanant Navigation Bar -->
  <div class="NavBar">
    
    <div class="navSettings">
      <v-btn icon class="settingsButton" to="/settings" variant="plain">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </div>
 
    <div class="navDarkLight">
      <v-switch
      hide-details
      v-model="model"
      :label="`${model}`"
      false-value="Dark"
      true-value="Light"
      ></v-switch>
    </div>

  </div>

  <hr>

  <!-- Title clickable text leading to homepage (just to get past app.vue) -->
  <div class="titleText">
    <v-btn class="btnTitleText" variant="plain" to="/">
      The White Knight
    </v-btn>
  </div>


  <!-- Router -->
  <router-view>
    
  </router-view>

</template>



<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import "firebase/compat/auth"
import PopupCard from './components/Popup.vue';

import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.min.css'

const model = ref('Dark')

console.log("test hello")
const display = ref('')
const analysisResult = ref('')
// const outputMessage = ref('')
const isLoggedIn = ref(false)
const router = useRouter()
const greeting = ref("")

const closeDialog = () => {
  analysisResult.value = '';
}

// firebase intialization code here
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true
  } else {
    isLoggedIn.value = false
  }
})

// sign out function for firebase
const signOut = () => {
  firebase.auth().signOut()
  router.push('/')
}


// function to higlight selected text
function getSelectedText() {
  if(window.getSelection) {
    return window.getSelection().toString()
  } else if (document.selection && document.selection.type != "Control") {
    return document.selection.createRange().text
  }
  return ''
}

// after highlighted the text is sent to the backend to get a response from the openai api
async function updateDisplayWithSelectedText() {

const text = getSelectedText()
display.value = text

if (text.trim().length > 0) {
  axios.post('http://localhost:8000/api/filter', { text: text.trim() })
    .then((response) => {
      console.log("filter result: ", response.data.filtered_text)
      analysisResult.value = response.data.filtered_text
      if (response.data.filtered_text !== 'No hate speech detected.') {
        
        // smt but do not do another axios.post here

      }
    })
    .catch((error) => {
      console.error("Error sending text for filtering: ", error)
    })
}
}

document.body.appendChild(document.createElement('div')).setAttribute('id', 'dialog-container');

</script>

<style scoped>

.NavBar{
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
}

.navSettings{
  align-content: center;
}

.settingsButton{
  margin: 0;
  padding: 0;
}

.navDarkLight{
  align-content: center;
  margin-right: 3%;
}

.titleText{
  display: flex;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 5%;
}

.btnTitleText{
  text-align: center;
  font-size: 24px;
  color: white;
}

.hr{
  width: 100%;
}
</style>

<template>

     <!-- Logo image -->
     <div class="shieldImgParent">
        <div class="shieldImg">
            <v-img
            src="https://media.discordapp.net/attachments/1224650509538037770/1240409318566789210/uni_work2.png?ex=664c6373&is=664b11f3&hm=742d17866a60fc63bdc88cf44b85decc31d81954f33e0f6319709ebeae35608d&=&format=webp&quality=lossless&width=937&height=1325"
            ></v-img>
        </div>
    </div>

    <div class="detectingTextParent">
        <v-text class="detectingText">
            Detecting hatespeech ...
        </v-text>
    </div>

    <div class="leaderboardParent">
        <v-btn 
            class="leaderboardButton" 
            to="" 
            variant="flat"
            color="#db5032"
        >Leaderboard</v-btn>
    </div>

</template>



<script setup>
import { ref, computed, onMounted, onUnmounted, defineEmits } from 'vue'
import PopupCard from './Popup.vue';
import axios from 'axios'
import { useRouter } from 'vue-router'
import { url_name, isChromeExtension, getCurrentTab, handleMessage, handleMessageListener, comment_des } from '../services/services'
import '@mdi/font/css/materialdesignicons.min.css'


// const counterSpeechPrompt = ref('')
// const receivedMessage = ref('')
// const tabUrl = ref('')
// const analysisResult = ref('')
// const isPopupVisible = ref(false)
// // for the progress bar
// const isLoading = ref(false)


// const emit = defineEmits(['close'])


// // processing comments to the backend -> check server.py
// async function sendCommentsToServer() {
//     const comments = Array.from(document.querySelectorAll('v-row p')).map(p => p.innerText)
//     console.log(comments)
//     try {
//         await axios.post('http://localhost:8000/api/process_comments', { comments })
//         console.log("Comments sent succesfully")
//     } catch(error) {
//         console.error("Error sending comments to server: ", error)
//     }
// }


// // this will only run in a chrome extension environment
// function setupChromeListeners() {
//     chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//         if(request.action === "useTabsAPI") {
//             receivedMessage.value = request.data.message
//             sendResponse({status: "Message received"})
//         }
//     })
// }

// // testing highlighting on hatespeech.vue and not on app.vue
// // check for the response and the delay here. is it better?
// const handleTextSelection = async() => {
//     const selectedText = window.getSelection().toString().trim()
//     if (selectedText) {
//         isLoading.value = true
//         try {
//             const response = await axios.post("http://localhost:8000/api/filter", { text: selectedText })
//             if (response.data.filtered_text !== "No hate speech detected.") {
//                 analysisResult.value = response.data.filtered_text
//                 isPopupVisible.value = response.data.filtered_text !== "No hate speech detected."
//                 console.log(analysisResult.value)

//                 // if (isPopupVisible.value) {
//                 //     if (window.getSelection) {
//                 //         window.getSelection().removeAllRanges()
//                 //     } else if (document.selection) {
//                 //         document.selection.empty()
//                 //     }
//                 // }
//             }
//         } catch(error) {
//             console.error("Error sending text for filtering: ", error)
//         } finally {
//             isLoading.value = false
//         }
//     }
// }

// const closeDialog = () => {
//     isPopupVisible.value = false // Hide the popup
//     isLoading.value = false
//     emit('close')
// }

// onMounted(async () => {

//     await getCurrentTab()
//     await handleMessageListener()
//     document.addEventListener('mouseup', handleTextSelection)
//     document.addEventListener('keyup', handleTextSelection)

//     if(isChromeExtension()) {
//         setupChromeListeners()
//     }
// })

// onUnmounted(() => {
//     document.removeEventListener('mouseup', handleTextSelection)
//     document.removeEventListener('keyup', handleTextSelection)

//     if(isChromeExtension()) {
//         chrome.runtime.onMessage.removeListener(setupChromeListeners)
//     }
//     // handleMessageListener()
// })

// const settings = () => {
//     firebase
//     .then((data) => {
//         router.push("/settings")
//     })
//     .catch(error => {
//         console.log(error.code)
//         // alert(error.message)
//     })
// }

</script>


<style scoped>

/* .loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.loading-spinner {
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid #3498db;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}


@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} */

    .shieldImgParent{
        display: flex;
        justify-content: center;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    .shieldImg{
        width: 200px;
    }

    .detectingText {
        font-size: 16px;
    }

    .leaderboardParent{
        margin: 10%;
    }

    .leaderboardButton{
        color: white;
    }

</style>

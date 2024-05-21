<template>

    <!-- Logo image -->
    <div class="shieldImgParent">
        <div class="shieldImg">
            <v-img
            src="https://media.discordapp.net/attachments/1224650509538037770/1240409318566789210/uni_work2.png?ex=664c6373&is=664b11f3&hm=742d17866a60fc63bdc88cf44b85decc31d81954f33e0f6319709ebeae35608d&=&format=webp&quality=lossless&width=937&height=1325"
            ></v-img>
        </div>
    </div>

    <!-- Container for both not logged in buttons, Login and Sign up -->
    <div class="buttonContainer">
        
        <!-- Login Button -->
        <div>
            <v-btn 
                class="loginButton" 
                v-if="!isLoggedIn" 
                style="width:100px;height:30px;" 
                to="/signin" variant="flat"
                color="#db5032"
            >Login</v-btn>
        </div>

        <!-- Sign up Button -->
        <div>
            <v-btn 
                class="signUpButton" 
                v-if="!isLoggedIn" 
                style="width:100px;height:30px;" 
                to="/signup" variant="flat"
            >Sign up</v-btn>
        </div>

    </div>

    <!-- Container logged in buttons for both Continue(continue to hatespeech when logged in) and Logout -->
    <div class="buttonContainer">

        <!-- Continue Button -->
        <div>
            <v-btn 
                class="loginButton" 
                v-if="isLoggedIn" 
                style="width:100px;height:30px;" 
                to="/hatespeech" variant="flat"
                color="#db5032"
            >Continue</v-btn>
        </div>

        <!-- Logout Button -->
        <div>
            <v-btn 
                class="signUpButton" 
                v-if="isLoggedIn"
                @click="signOut"
                style="width:100px;height:30px;" 
                to="/" variant="flat"
            >Logout</v-btn>
        </div>

    </div>
  
</template>
  
  
<script setup>
    import { ref, computed, onMounted, onUnmounted, defineEmits } from 'vue'
    import PopupCard from './Popup.vue';
    import axios from 'axios'
    import { useRouter } from 'vue-router'
    import { url_name, isChromeExtension, getCurrentTab, handleMessage, handleMessageListener, comment_des } from '../services/services'
    import '@mdi/font/css/materialdesignicons.min.css'

    import firebase from 'firebase/compat/app'
    import "firebase/compat/firestore"
    import "firebase/compat/auth"
  

    const isLoggedIn = ref(false)

    //if the user is logged in
    firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        isLoggedIn.value = true
    } else {
        isLoggedIn.value = false
    }
    })

    // logs out the user
    const signOut = () => {
    firebase.auth().signOut()
    router.push('/')
    }

</script>
  

<style scoped>
    .shieldImgParent{
        display: flex;
        justify-content: center;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    .shieldImg{
        width: 200px;
    }

    .buttonContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .loginButton{
        color: white;
    }
 
</style>
  
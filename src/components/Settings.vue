<template>

    <!-- <div id="settingsBack">
        <v-btn  density="comfortable" variant="outlined" to="/hatespeech">
            <v-icon icon="mdi-arrow-left"></v-icon>
        </v-btn>
    </div> -->


    <div class="responseBox">
        <v-text>Response Types</v-text>

        <v-container >
            <v-select
                clearable
                chips
                label="Select"
                :items="['sarcastic', 'formal', 'humorous', 'intelligent']"
                variant="outlined"
                multiple
            ></v-select>
        </v-container>
    </div>

    <div class="filterBox">
        <v-text>Filter Types</v-text>

        <v-container >
            <v-select
                label="Select"
                :items="['LLM', 'Filter']"
                variant="outlined"
            ></v-select>
        </v-container>
    </div>

    <div id="settingsBack">
        <v-btn 
            variant="flat"
            color="#db5032" 
            to="/hatespeech">
            <!-- <v-icon icon="mdi-arrow-left"></v-icon> -->
            Return
        </v-btn>
    </div>

</template>


<script setup>
import { ref } from 'vue'
import firebase from "firebase/compat/app"
import { useRouter } from 'vue-router'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.min.css'

const model = ref('off')

</script>

<style scoped>
    #Mode {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #settingsTop{
        display: flex;
        padding-left: 0;
        padding-right: 0;
    }

    #settingsBack{
        align-items: flex-start;
    }

    #settingsTitle{
        font-size: large;
        padding-left: 26.7%;
    }

    .responseBox{
        margin-top: 5%;
        margin-left: 2%;
        margin-right: 2%;
        max-width:300px;
    }

    .filterBox{
        margin-bottom: 5%;
        margin-left: 2%;
        margin-right: 2%;
        max-width:300px;
    }

</style>
<template>
    <div>
        <div class="createBox">
            <v-text-field class="inputField" variant="solo" label="Title" v-model="addEventInfo.title"></v-text-field>
            <v-text-field class="inputField" variant="solo" label="Description" v-model="addEventInfo.description"></v-text-field>
            <Datepicker class="inputField" :format="format"  v-model="addEventInfo.date" ></Datepicker>
        
            <v-btn class="inputBtn" @click="addEvent(addEventInfo)">Create</v-btn>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useEvent from '../modules/useEvents'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

let addEventInfo = ref({})

const { addEvent } = useEvent()

const format = (date) => {
    const day = date.getDate()
    const month = date.getMonth() +1
    const yeah = date.getFullYear()
    return `${day}/${month}/${yeah}`
}

</script>

<style lang="scss" scoped>
.createBox {
    width: 70%;
    margin:50px auto;

    .inputField {
        height: 50px;
        margin: 50px 0;
        
    }
    .inputBtn {
        margin: 50px 0;
    }

}
</style>
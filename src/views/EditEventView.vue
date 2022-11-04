<template>
    <div>
        <div class="editBox" v-for="event in filteredEventOnId" :key="event">
            <v-text-field class="inputField" variant="solo" label="Title" v-model="event.title"></v-text-field>
            <v-text-field class="inputField" variant="solo" label="Description" v-model="event.description"></v-text-field>
            <Datepicker class="inputField" :format="format"  v-model="event.date" ></Datepicker>
        
            <v-btn class="inputBtn" @click="editEvent(event)">Edit</v-btn>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import useEvents from '../modules/useEvents'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const format = (date) => {
    const day = date.getDate()
    const month = date.getMonth() +1
    const yeah = date.getFullYear()
    return `${day}/${month}/${yeah}`
}

const { eventsData, getEventsData, editEvent } = useEvents()

const route = useRoute()
const routeId = ref(route.params.id)

let filteredEventOnId = computed(() => {
    return eventsData.value.filter(i => i.id == routeId.value)
})

onMounted(() => {
    getEventsData()
})
    
</script>

<style lang="scss" scoped>
.editBox {
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
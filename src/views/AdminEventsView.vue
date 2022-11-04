<template>
    <div class="adminEvent">
        <router-link class="eventCreate" to="/createEvent">Create event</router-link>

        <div>

        <v-card class="card" v-for="event in eventsData" :key="event">
            <h2>{{event.title}}</h2>
            <p>{{event.date}}</p>
            <div>
                <v-btn @click="deleteEvent(event.id)">Delete</v-btn>
                <router-link :to="{ name:'editEvent', params:{ id : event.id}}" >
                    <v-btn >Edit</v-btn>
                </router-link>
            </div>
        </v-card>
        </div>
    </div>
</template>

<script setup>
import useEvents from '../modules/useEvents'
import { onMounted } from 'vue'

const { eventsData, getEventsData, deleteEvent } = useEvents()


onMounted(() => {
    getEventsData()
    
})

</script>

<style lang="scss" scoped>
.adminEvent {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    .eventCreate {
        border: 1px solid #000;
        padding: 5px 10px;
        border-radius: 4px;
        color:green;
        &:hover {
            color:white;
            background-color:green;
        }
    }
    .card {
        margin: 20px 0;
        padding:2px 5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90vw;;
    }
}
</style>
<template>
<div>

    <div v-for="event in eventsData" :key="event">
        <router-link :to="{ name:'singleEvent', params:{ id : event.id}}" >

            <div>
                <h2>{{event.title}}</h2>
            </div>
        </router-link>
    </div>
</div>
</template>

<script setup>
import { onMounted} from 'vue'
import useEvents from '../modules/useEvents'


    const { eventsData, getEventsData } = useEvents()

    

    onMounted(() => {
        getEventsData()
    })

</script>

<style lang="scss" scoped>

</style>
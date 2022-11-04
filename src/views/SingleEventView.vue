<template>
    <div>
        <div v-for="event in filteredEventOnId" :key="event">
            <h2>{{event.title}}</h2>
            <p>{{event.description}}</p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted} from 'vue'
import useEvents from '../modules/useEvents'

const { eventsData, getEventsData } = useEvents()

const route = useRoute()
const routeId = ref(route.params.id)

let filteredEventOnId = computed(() => {
    return eventsData.value.filter(i => i.id == routeId.value)
})

onMounted (() => {
    getEventsData()
})

</script>

<style lang="scss" scoped>

</style>
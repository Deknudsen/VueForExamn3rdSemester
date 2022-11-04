<template>
<div>

    <div v-for="event in events" :key="event">
        <div>
            <h2>{{event.id}}</h2>
        </div>
    </div>
</div>
</template>

<script setup>
import { onMounted} from 'vue'
import useEvents from '../modules/useEvents'


    const { events, getEventsData } = useEvents()

    onMounted(() => {
        getEventsData()
    })

</script>

<style lang="scss" scoped>

</style>
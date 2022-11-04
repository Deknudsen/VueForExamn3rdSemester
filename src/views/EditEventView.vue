<template>
    <div>
        <div class="editBox" v-for="event in filteredEventOnId" :key="event">
            <v-text-field class="inputField" variant="solo" label="Title" v-model="event.title"></v-text-field>
            <v-text-field class="inputField" variant="solo" label="Description" v-model="event.description"></v-text-field>
            <Datepicker class="inputField" :format="format"  v-model="event.date" ></Datepicker>
        
            <v-btn class="inputBtn" @click="editEvent(event)">Edit</v-btn>
            <router-link to="/adminEvents" >
                    <v-btn >Cancle</v-btn>
                </router-link>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'
import useEvents from '../modules/useEvents'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import router from '@/router'

const format = (date) => {
    const day = date.getDate()
    const month = date.getMonth() +1
    const yeah = date.getFullYear()
    return `${day}/${month}/${yeah}`
}

const { eventsData, getEventsData, editEvent } = useEvents()


const route = useRoute()
const routeId = ref(route.params.id)

let auth
const isLoggedin = ref(false)

let filteredEventOnId = computed(() => {
    return eventsData.value.filter(i => i.id == routeId.value)
})

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            getEventsData(),
            isLoggedin.value = true
        }
        else {
            router.push({ path: '/login'}),
            isLoggedin.value = false
        }
    })
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
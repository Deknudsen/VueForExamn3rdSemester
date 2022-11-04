<template>
  <header>
      <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/events">Events</router-link> 
      <router-link v-if="isLoggedin" to="/admin">Admin</router-link> 
      <router-link v-if="isLoggedin" to="/adminEvents">AdminEvents</router-link> 
      <router-link v-if="!isLoggedin" to="/login">Log in</router-link>
      <router-link v-if="isLoggedin" @click="logOut" to="/">Log out</router-link>
    </nav>
  </header>
</template>

<script setup>
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { ref, onMounted } from 'vue'
import useEvents from '../modules/useEvents'
import useUser from '../modules/useUsers'

const { getEventsData } = useEvents()
const { logOut } = useUser()

let auth
const isLoggedin = ref(false)


onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            getEventsData(),
            isLoggedin.value = true
        }
        else {
            isLoggedin.value = false
        }
        
    })
})
</script>

<style lang="scss" scoped>
header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  box-shadow: 0 2px 4px #000;
  margin-bottom: 50px;

  nav {
    width: 50vw;
    display: flex;
    justify-content: center;

    a {
      color: black;
      padding: 10px;
      border: 1px solid black;
      border-radius: 4px;
      margin:2%;

      &:hover {
        color: white;
        background-color: black;
      }
    }
  }
  
}
</style>
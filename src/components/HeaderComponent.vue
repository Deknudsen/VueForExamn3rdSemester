<template>
  <header>
      <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/adminEvents">AdminEvents</router-link> |
      <router-link to="/login">Log in</router-link>
    </nav>
  </header>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>
header {
  height: 100px;
  display: flex;
  
}
</style>
<template>
  <HeaderComponent />
  <router-view/>
  <FooterComponent />
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

HeaderComponent
FooterComponent

</script>

<style lang="scss">
a {
  text-decoration: none;

}
</style>

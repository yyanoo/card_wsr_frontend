<script setup>
import { useRouter } from 'vue-router'
import SiteNavbar from './components/SiteNavbar.vue'

const router = useRouter()

</script>

<template>
  <div>
    <SiteNavbar />
    <router-view />
  </div>
</template>

<style></style>

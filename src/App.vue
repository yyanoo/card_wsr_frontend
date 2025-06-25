<script setup>
import { useSearchTitle } from './stores/searchTitle'
import { useRouter } from 'vue-router'
import SiteNavbar from './components/SiteNavbar.vue'


const searchTitle = useSearchTitle()
const router = useRouter()

searchTitle.setupSeriesWatcher(router);

</script>

<template>
  <div>
    <SiteNavbar />
    <router-view />
  </div>
</template>

<style></style>

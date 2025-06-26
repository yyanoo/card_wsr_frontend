<script setup>
import SiteNavbar from './components/SiteNavbar.vue'
import Loading from './components/Loading.vue';
import { watch } from 'vue';
import { useCardStore } from './stores/cardStore';

const cardStore = useCardStore()

watch(
  () => cardStore.loading,
  (loading) => {
    if (loading) {
      console.log('Loading started')
    } else {
      console.log('Loading finished')
    }
  }
)
</script>

<template>
  <div>
    <Loading v-if="cardStore.loading" />
    <SiteNavbar />
    <router-view />
  </div>
</template>

<style></style>

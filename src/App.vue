<script>
import { useSearchStore } from './stores/searchStore'
import { useRouter } from 'vue-router'
import SiteNavbar from './components/SiteNavbar.vue'

export default {
  components: {
    SiteNavbar,
  },
  setup() {
    const searchStore = useSearchStore()
    const router = useRouter()

    searchStore.setupSeriesWatcher(router);

    return { searchStore }
  },
}

</script>

<template>
  <div>
    <SiteNavbar />
    <router-view />
  </div>
</template>

<style></style>

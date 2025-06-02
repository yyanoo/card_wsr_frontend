<script>
import { useSearchStore } from './stores/searchStore'
import SiteNavbar from './components/SiteNavbar.vue'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    SiteNavbar,
  },
  setup() {
    const searchStore = useSearchStore()
    const router = useRouter()

    watch(
      () => searchStore.selectedSeries,
      (newVal) => {
        if (newVal != '/') {
          router.push('/cardlist')
        }
      },
    )

    return { searchStore }
  },
}
</script>

<template>
  <div>
    <SiteNavbar />
    <router-view />
  </div>
  <div v-if="searchStore.selectedSeries == '/'" class="main-container">
    <h5 class="main-text text-light">WSR搜尋網頁</h5>
    <div class="search-box-title">
      <select class="form-select text-light" v-model="searchStore.selectedSeries">
        <option class="text-light" value="/" disabled>請選擇系列</option>
        <option class="text-light" value="os01">Os01</option>
        <option class="text-light" value="os02">Os02</option>
      </select>
    </div>
  </div>
</template>

<style>
.main-container {
  display: flex;
  margin: auto;
  padding: 20px;
  flex-direction: column;
  align-items: center;
}
.search-box-title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  width: 80%;
}
</style>

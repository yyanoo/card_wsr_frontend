import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    selectedSeries: '/', // 對應 <select> 的 v-model
  }),
  actions: {
    reset() {
      this.selectedSeries = '/'
    },
    setSeries(value) {
      this.selectedSeries = value
    },
  },
})

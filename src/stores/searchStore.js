import { defineStore } from "pinia";
import { watch } from "vue";

export const useSearchStore = defineStore("search", {
  state: () => ({
    selectedSeries: "/", // 對應 <select> 的 v-model
  }),
  actions: {
    reset() {
      this.selectedSeries = "/";
    },
    setSeries(value) {
      this.selectedSeries = value;
    },
    setupSeriesWatcher(router) {
      watch(
        () => this.selectedSeries,
        (newVal) => {
          if (newVal !== "/") {
            router.push(`/cardlist/${newVal}`);
          }
        }
      );
    },
  },
});

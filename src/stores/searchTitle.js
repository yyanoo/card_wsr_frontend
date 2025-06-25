import { defineStore } from "pinia";
import { watch } from "vue";

export const useSearchTitle = defineStore("search", {
  state: () => ({
    selectedSeries: "/",
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
        //seletor 值轉換到 router cardlist/:series
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

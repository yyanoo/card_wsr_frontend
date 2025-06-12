import { defineStore } from "pinia";
import { watch } from "vue";

export const useSearchStore = defineStore("search", {
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

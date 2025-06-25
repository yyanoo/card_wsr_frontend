import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    selectedSeries: "",
    selectedTitle: "",
    selectedColor: "",
    selectedLvl: "",
  }),

  actions: {
    reset() {
      this.selectedSeries = "";
      this.selectedTitle = "";
      this.selectedColor = "";
      this.selectedLvl = "";
    },
  },
});
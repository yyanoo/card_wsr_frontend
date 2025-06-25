import { defineStore } from "pinia";
import { searchCards } from "../api/cardApi";
import { useSearchStore } from "./searchStore";

export const useCardStore = defineStore("card", {
  state: () => ({
    cards: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchCards(params = {}) {
      this.loading = true;
      this.error = null;

      try {
        const response = await searchCards(params);
        this.cards = response.data;
      } catch (err) {
        this.error = err.message || "取得資料失敗";
      } finally {
        this.loading = false;
      }
    },

    async fetchCardsFromSearchStore() {
      const searchStore = useSearchStore();
      await this.fetchCards({
        id: searchStore.selectedSeries,
        title: searchStore.selectedTitle,
        color: searchStore.selectedColor,
        lvl: searchStore.selectedLvl,
      });
    },
  },
});

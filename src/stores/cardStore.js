import { defineStore } from "pinia";
import { searchCards } from "../api/cardApi";
import { useSearchStore } from "./searchStore";

export const useCardStore = defineStore("card", {
  state: () => ({
    Allcards: [],
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
        this.Allcards = response.data;
        this.cards = this.Allcards;
        this.loading = false;
      } catch (err) {
        this.error = err.message || "取得資料失敗";
      }
    },
    async fetchCardsFromSearchStore() {
      const searchStore = useSearchStore();
      await this.fetchCards({
        title: searchStore.selectedTitle,
      });
    },
  },
});

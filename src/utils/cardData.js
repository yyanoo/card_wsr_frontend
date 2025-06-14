import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { getCard } from "../service/api";
import { useSearchStore } from "../stores/searchStore";

export function useCardData() {
  const route = useRoute();
  const searchStore = useSearchStore();
  const cards = ref([]);

  async function fetchCards(series) {
    try {
      const res = await getCard(series);
      cards.value = res.data;
      searchStore.selectedSeries = series;
    } catch (err) {
      console.error("載入卡片資料失敗", err);
      cards.value = [];
    }
  }

  //監聽series參數變化 有新參數時候就執行 fetchCards()
  watch(
    () => route.params.series,
    (newSeries) => {
      if (newSeries) {
        fetchCards(newSeries);
      } else {
        cards.value = [];
      }
    },
    { immediate: true }
  );

  return {
    cards,
  };
}

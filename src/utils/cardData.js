import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { getCard } from "../service/api";
import { useSearchTitle } from "../stores/searchTitle";

export function useCardData() {
  const route = useRoute();
  const searchTitle = useSearchTitle();
  const cards = ref([]);
  
  //api獲得資料 并且更改selected值
  async function fetchCards(series) {
    try {
      const res = await getCard(series);
      cards.value = res.data;
      searchTitle.selectedSeries = series;
      
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

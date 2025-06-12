import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { getCard } from "../service/api";

export function useCardData() {
  const route = useRoute();
  const cards = ref([]);

  const fetchCards = async (series) => {
    try {
      const res = await getCard(series);
      cards.value = res.data;
    } catch (err) {
      console.error("載入卡片資料失敗", err);
      cards.value = [];
    }
  };

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
import { ref, watch } from 'vue'
import { useSearchStore } from '../stores/searchStore'

export function useCardData() {
  const searchStore = useSearchStore()
  const cards = ref([])

  const fetchCards = async (series) => {
    const apiUrl = `https://raw.githubusercontent.com/yyanoo/test/main/${series}.json`;

    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      cards.value = data;
    } catch (e) {
      console.error('載入 JSON 失敗', e);
      cards.value = [];
    }
  };

  watch(
    () => searchStore.selectedSeries,
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
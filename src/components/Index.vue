<!-- Index.vue -->
<template>
  <div>
    <h1>首頁</h1>
    <button @click="goToCardData">搜尋按鈕</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToCardData() {
  // 可加上前置邏輯，如搜尋驗證、儲存資料等
  router.push('/card_data')
}
</script>
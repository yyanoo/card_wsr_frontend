<script setup>
import { useSearchTitle } from '../stores/searchTitle'
import { useRouter } from 'vue-router'

const searchTitle = useSearchTitle()
const router = useRouter()

searchTitle.setupSeriesWatcher(router);

</script>

<template>
    <div v-if="searchTitle.selectedSeries === '/'" class="main-container">
        <h5 class="main-text text-light">WSR搜尋網頁</h5>
        <div class="search-box-title">
            <select class="form-select text-light" v-model="searchTitle.selectedSeries">
                <option class="text-light" value="/" disabled>請選擇系列</option>
                <option class="text-light" value="os01">Os01</option>
                <option class="text-light" value="os02">Os02</option>
            </select>
        </div>
        <div class="search">
            <input type="text" v-model="cardId" placeholder="請輸入卡號">
            <button>asas</button>
        </div>
    </div>
</template>

<style>
.main-container {
    display: flex;
    margin: auto;
    padding: 20px;
    flex-direction: column;
    align-items: center;
}

.search-box-title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    width: 80%;
}
</style>

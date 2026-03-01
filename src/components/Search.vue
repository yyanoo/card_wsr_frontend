<script setup>
import { ref } from "vue";
import { useSearchStore } from "../stores/data_Store";
import { useRouter } from 'vue-router'

const searchStore = useSearchStore()
const router = useRouter()

const inputTitle = ref('')

const goHome = () => {
    router.push('/')
}

const submitsearch = () => {
    searchStore.reset()
    searchStore.selectedTitle = inputTitle.value
    router.push('/card')
}

</script>

<template>
    <div class="nav-item nav-li">
        <router-link to="/" @click="goHome" class="nav-link">
            <div class="text-light">系列</div>
        </router-link>

        <div class="search-box-title">
            <select class="form-select text-light" v-model="inputTitle">
                <option class="text-light" value="">請選擇系列</option>
                <option class="text-light" value="OS01">OS01</option>
                <option class="text-light" value="OS02">OS02</option>
            </select>
        </div>
    </div>

    <div class="input-text" style="padding: 10px 0 0 0;">
        <button class="card-search-button" @click="submitsearch" data-bs-dismiss="offcanvas">搜尋按鈕</button>
    </div>
</template>
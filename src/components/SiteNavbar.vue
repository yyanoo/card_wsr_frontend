<script setup>
import { useSearchStore } from "../stores/searchStore";

const searchStore = useSearchStore()

function goHome() {
  searchStore.reset()
}
</script>

<template>
  <nav class="navbar fixed-top text-bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-bg-dark" @click="goHome">卡片搜尋器</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <div style="width: 100%; height: 100%; display: block; fill: currentcolor">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"
            aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%">
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
          </svg>
        </div>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header text-bg-dark">
          <h5 class="offcanvas-title">卡片搜尋器</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item nav-li">
              <router-link to="/" @click="goHome" class="nav-link">
                <div class="text-light">首頁</div>
              </router-link>
            </li>

            <li class="nav-item nav-li">
              <router-link to="/" @click="goHome" class="nav-link">
                <div class="text-light">系列</div>
              </router-link>

              <div class="search-box-title">
                <select class="form-select text-light" v-model="searchStore.selectedTitle">
                  <option class="text-light" value="">請選擇系列</option>
                  <option class="text-light" value="OS01">OS01</option>
                  <option class="text-light" value="OS02">OS02</option>
                </select>
              </div>
            </li>

            <div class="input-text">
              <div class="text-light">首頁</div>
              <input type="text" placeholder="0000">
              <button>sasas</button>
            </div>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                搜尋器
              </a>
              <ul class="dropdown-menu">
                <li class="nav-li">
                  <p class="box-text text-light">等級</p>
                  <div class="search-box">
                    <select class="form-select text-light" v-model="searchStore.selectedLvl">
                      <option class="text-light" value="">未選</option>
                      <option class="text-light" value="0">0</option>
                      <option class="text-light" value="1">1</option>
                      <option class="text-light" value="2">2</option>
                      <option class="text-light" value="3">3</option>
                    </select>
                  </div>
                </li>
                <li class="nav-li">
                  <p class="box-text text-light">顔色</p>
                  <div class="search-box">
                    <select class="form-select text-light" v-model="searchStore.selectedColor">
                      <option class="text-light" value="">未選</option>
                      <option class="text-light" value="黄">黃</option>
                      <option class="text-light" value="緑">綠</option>
                      <option class="text-light" value="赤">紅</option>
                      <option class="text-light" value="青">藍</option>
                    </select>
                  </div>
                </li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>

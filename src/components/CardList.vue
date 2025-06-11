<script setup>
import { onMounted, nextTick, ref } from 'vue' // 引入 ref
import { useCardData } from '../data/cardData'

const { cards } = useCardData()

onMounted(async () => {
  await nextTick() // 等待 DOM 渲染

});

function checkRotateOnLoad(event, card) {
  const img = event.target;
  if (img.naturalWidth > img.naturalHeight) {
    card.isRotated = true;
  } else {
    card.isRotated = false;
  }
}

cards.value.forEach(card => {
  if (!('isRotated' in card)) {
    card.isRotated = false;
  }

});

</script>

<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center mb-3">
    <div class="card-item" v-for="(card, index) in cards" :key="index">
      <div class="modal fade" :id="'modal' + index" aria-hidden="true" :aria-labelledby="'label-modal' + index"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="container">
              <div class="text-content">
                <div class="destop-button-container">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" id="button"></button>
                </div>
                <h1>{{ card.name }}</h1>
                <p>{{ card.id }}</p>
                <ul>
                  <li v-for="(skill, idx) in card.effect" :key="idx">{{ skill }}</li>
                </ul>
              </div>
              <div class="image-container">
                <img :src="card.picture" :alt="card.name" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container card_container">
        <img :src="card.picture" :data-bs-target="'#modal' + index" data-bs-toggle="modal" class="card-img"
          :class="{ rotate: card.isRotated }" @load="checkRotateOnLoad($event, card)" />
        <h1 class="text-center card-id">{{ card.id }}</h1>
        <h2 class="text-center card-text">{{ card.name }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rotate {
  transform: rotate(90deg) translateX(40px);
  width: 140% !important;
  margin-bottom: 83px !important;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
  margin-right: 200px;
}

.card_container {
  flex-direction: column;
  align-items: center;
  padding-bottom: 0px;
  max-width: 240px;
  max-height: 360px;
}

.card-item {
  margin: 10px;
}

.card-img {
  margin-bottom: 5px;
  cursor: pointer;
}

.card-text {
  margin: 5px;
  font-size: 0.7em;
  color: #fbfbfb;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
}

.card-id {
  margin: 5px;
  font-size: 0.8em;
  color: #fbfbfb;
}

/* Modal 內部排版 */
.modal-content {
  background-color: #1d1d1ddc;
  color: #fbfbfb;
  border: none;
}

.container {
  display: flex;
  align-items: center;
  max-width: auto;
  margin: auto;
  padding: 20px;
}

.text-content {
  flex: 1;
  padding-left: 20px;
  order: 2;
}

.image-container {
  order: 1;
}

.image-container img {
  max-width: 100%;
  height: auto;
  display: block;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  padding-bottom: 10px;
  font-size: 1em;
}

#button {
  display: block;
  position: absolute;
  margin: 20px;
  top: 0;
  right: 0;
}

.mobile-button-container {
  display: none;
  order: 3;
}

@media (max-width: 999px) {
  .container {
    flex-direction: column;
    align-items: center;
    padding-bottom: 0px;
  }

  .image-container {
    width: 90%;
    margin-bottom: 20px;
  }

  img {
    padding-top: 20px;
  }

  .text-content {
    padding: 0px;
  }

  #button {
    margin: 0px;
    transform: translate(-15px, 15px);
  }
  .rotate {
    transform:  rotate(90deg) translateX(50px) translateY(-10px);
  }
}
</style>

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import VueLazyLoad from "vue3-lazyload";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");

app.use(VueLazyLoad, {
  lazyComponent: true,
  loading: "https://upload.wikimedia.org/wikipedia/en/c/c0/Wei%C3%9F_Schwarz_cardback.png",
  error: "https://upload.wikimedia.org/wikipedia/en/c/c0/Wei%C3%9F_Schwarz_cardback.png",
});

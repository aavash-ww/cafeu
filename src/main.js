import { createApp } from "vue";
import App from "./App.vue";
import "./sass/index.css";
import router from "./router/router";

createApp(App).use(router).mount("#app");

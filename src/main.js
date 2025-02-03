import { createApp } from "vue";
import App from "./App.vue";
import "./sass/index.css";
import router from "./router/router";
import { Icon } from "@iconify/vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("Icon", Icon);

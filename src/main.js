import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import misaResource from "./js/resource";

const app = createApp(App);

// createApp(App).mount("#app");
app.use(PrimeVue);
app.use(misaResource);
app.mount("#app");

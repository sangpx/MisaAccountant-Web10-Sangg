import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

createApp(App).mount("#app");
app.use(PrimeVue);

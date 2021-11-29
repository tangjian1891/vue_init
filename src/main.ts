import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Loading from "@/components/loading/loading";

const app = createApp(App);

app.use(Loading)
app.use(router);
app.mount("#app");

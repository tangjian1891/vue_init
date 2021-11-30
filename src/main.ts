import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createLoading } from "@/components/loading";
import { createDialog } from "./components/toa";

const app = createApp(App);
createLoading();
createDialog();
app.use(router);
app.mount("#app");

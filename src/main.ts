import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createLoading } from "@/components/loading";
import { createDialog } from "./components/toa";
import { createPinia } from "pinia";


import "./utils/init/index"

const app = createApp(App);
createLoading();
createDialog();
console.warn("当前所属模式",import.meta.env.VITE_APP_MODE); //自定义的三种 dev uat prod
console.log(import.meta.env.BASE_URL);//路径
// console.log(import.meta.env.DEV);//是否为开发 Boolean
// console.log(import.meta.env.MODE);//MODE就是当前注入的。与  VITE_APP_MODE 相同
// console.log(import.meta.env.PROD);//是否为打包 Boolean
app.use(router);
app.use(createPinia())
app.mount("#app");

import Loading from "./Loading.vue";
import { createApp, reactive, toRefs } from "vue-demi";

const loadingData = reactive({
  visible: false,
  text: "加载中。。。",
});

export function createLoading() {
  const app = createApp(Loading, {
    ...toRefs(loadingData),
  });
  const mountNode = document.createElement("div");
  app.mount(mountNode);
  document.body.appendChild(mountNode);
}

let loadingSeed: any = null;
const duration = 61 * 1000;
export function openLoading(text = "加载中") {
  // 默认最大持续时间为61s，比axios超时多1秒
  loadingData.visible = true;
  loadingData.text = text;
  // 如果已经存在定时种子,则进行清除
  if (loadingSeed) {
    clearTimeout(loadingSeed); // 清掉
  }
  // 每次都保证重新计时。倒计时的 duration
  loadingSeed = setTimeout(() => {
    loadingData.visible = false;
    loadingSeed = null;
  }, duration);
}

export function closeLoading() {
  loadingData.visible = false;
  if (loadingSeed) {
    clearTimeout(loadingSeed); // 清掉
    loadingSeed = null;
  }
}

export function isLoading() {
  return loadingData.visible;
}

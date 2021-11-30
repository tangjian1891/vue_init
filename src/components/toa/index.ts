import { Dialog } from "vant";
import { createApp, reactive, toRefs } from "vue-demi";
import Toa from "./Toa.vue";
const toaData = reactive({
  visible: false,
  position: "center",
  text: "",
  positionName: "", //根据position计算得到
});

export function createDialog() {
  const app = createApp(Toa, {
    ...toRefs(toaData),
  });
  const mountNode = document.createElement("div");
  app.mount(mountNode);
  document.body.appendChild(mountNode);
}
let toaSeed: any = null;
export function toa(text: string = "") {
  console.log('执行了');
  let duration = 1500;
  if (text.length <= 50) {
    duration = (text.length / 400) * 60 * 1000; //按一分钟400个字计算
    duration = duration < 1500 ? 1500 : duration; //如果小于1500毫秒，还是按最小1500毫秒展示
  } else {
    // 启动Dialog
    Dialog.alert({
      title: "提示",
      message: text,
      // className:"alertBtnStyle",
    });
    return;
  }

  toaData.visible = true;
  toaData.text = text;
  toaData.position = "center";

  if (toaSeed) {
    clearTimeout(toaSeed);
  }
  console.log(duration);
  // 每次都保证重新计时。倒计时的 duration
  toaSeed = setTimeout(() => {
    toaData.visible = false;
    toaSeed = null;
  }, duration);
}

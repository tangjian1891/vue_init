import Loading from "./Loading.vue";
import { createApp, reactive } from "vue-demi";

const loadingData = reactive({
  visible: true,
  text: "加载中123。。。",
});

export default {
  install(Vue) {
    console.log("查看Vue", Vue);
    const app = createApp(Loading,loadingData);
    console.log(app, "实例对象");
    const div = document.createElement("div");
    const loading = app.mount(div);
    document.body.appendChild(div);
    const loadingDom = loading.$el;
    console.log(loadingDom);
    return;
    // loading定时器的时间种子
    let loadingSeed = null;
    // 默认最大持续时间为61s，比axios超时多1秒
    let duration = 61 * 1000;

    // 挂在到Vue实例上
    /**
     *   支持接收两种传递参数形式。 单个字符串参数 || 对象形式
     * @param {String} args 直接展示的提示文字。
     * @param {Object} args  对象.  {text,mode} mode参数 ['full','default'] full全屏模式   默认default为预留顶部导航栏可以点击
     * mode暂时没写。。。
     */
    Vue.prototype.$loading = function (args) {
      // console.log(args);
      let { text } = args ?? {}; //解构抽取数据，后面可以扩展各种配置options

      if (Object.prototype.toString.call(args) === "[object String]") {
        // 参数为字符串，直接赋值给message
        text = args;
      }

      loading.visible = true;
      loading.text = text ?? "加载中..."; //不传递就是默认【加载中...】

      // 如果已经存在定时种子,则进行清除
      if (loadingSeed) {
        clearTimeout(loadingSeed); // 清掉
      }
      // 每次都保证重新计时。倒计时的 duration
      loadingSeed = setTimeout(() => {
        loading.visible = false;
        loadingSeed = null;
      }, duration);
    };

    // 利用  函数也是对象的特性。。。 一般不推荐这样搞结构，但是用起来比较方便,比较见名知意
    Vue.prototype.$loading.close = function () {
      loading.visible = false; //直接关闭
      // 如果已经存在定时种子,则进行清除
      if (loadingSeed) {
        clearTimeout(loadingSeed); // 清掉
        loadingSeed = null;
      }
    };

    // 捕获loading状态
    Vue.prototype.$loading.isVisible = function () {
      return loading.visible;
    };
  },
};
export { loadingData };

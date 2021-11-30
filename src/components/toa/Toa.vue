<template>
  <!-- 全局提示框 -->
  <transition name="fade">
    <div :class="['toast-wrap', positionName2]">
      <div
        v-show="visible.value"
        class="dialog-tips"
      >
        {{ text.value }}
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
var postionArr = ["center", "bottom", "top"];
export default {
  props: ["visible", "position", "text", "positionName"],
  data() {
    return {
      positionName2: "", //根据position计算得到
    };
  },
  watch: {
    position: {
      handler(newVal) {
        const flag = postionArr.includes(newVal);
        this.positionName2 = flag ? `dialog-${newVal}` : "dialog-center";
      },
      immediate: true, //立执行一次
    },
  },
};
</script>
<style>
.toast-wrap {
  position: fixed;
  z-index: 10000;
  width: 100%;
  background-color: transparent;
  text-align: center;
}
.dialog-tips {
  max-width: 270px;
  overflow: hidden;
  display: inline-block;
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0px 8px 15px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 1.3;
}

.dialog-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.dialog-bottom {
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, -50%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

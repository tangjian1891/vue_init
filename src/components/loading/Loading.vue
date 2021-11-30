<template>
  <!-- bug 这里并没有对prop的visible做.value自动拆解，需要手动 -->
  <div style="border: 1px solid red" v-show="visible.value" ref="loadingRef" class="_loading">
    <div class="bg-shadow">
      <img class="rotate_img" src="~@/assets/images/loading.png" />
      <p>{{ props.text.value }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const props = defineProps(["visible", "text"]);

const loadingRef = ref<HTMLElement>(null);

onMounted(() => {
  // 防止滚动穿透
  loadingRef.value.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
    },
    false
  );
});
</script>
<style>
/* 公共的loading fixed 固定定位 start */
._loading {
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 44px;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0);
}
._loading .bg-shadow {
  width: 180px;
  height: 90px;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
._loading .rotate_img {
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto;
  animation: rotation 0.5s linear infinite;
  -moz-animation: rotation 0.5s linear infinite;
  -webkit-animation: rotation 0.5s linear infinite;
  -o-animation: rotation 0.5s linear infinite;
}
._loading .bg-shadow p {
  font-size: 13px;
  color: #ffffff;
  margin-top: 13px;
  text-align: center;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
/* 公共的loading  end */
</style>

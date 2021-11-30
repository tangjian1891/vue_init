<template>
  <div>
    <div>这是首页啊</div>
    <router-link :to="{ name: 'index' }">跳转去index</router-link>
    <Button type="primary">主要按钮</Button>
    13
    <Rate v-model="value" />
    还可以啊
    <button @click="toggle">点击出现loading.2后关闭</button>
    <button @click="toast">点击出现toa,自定义长度</button>
  </div>
</template>

<script lang="ts" setup>
import { closeLoading, openLoading } from "@/components/loading";
import { toa } from "@/components/toa";
import { ref } from "@vue/reactivity";
import { Button, Rate } from "vant";
const value = ref(0);

function onConfirm() {
  console.log(123);
}

function toggle() {
  openLoading
  setTimeout(() => {
    closeLoading();
  }, 2000);
}

function toast() {
  console.log("触发执行");
  // toa("什么啊什么啊 么啊");
  toa("什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊 么啊");
}
</script>

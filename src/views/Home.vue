<template>
  <div>
    <div>这是首页啊</div>
    <router-link :to="{ name: 'index' }">跳转去index</router-link>
    <Button type="primary">主要按钮</Button>
    13
    <Rate v-model="value" />
    还可以啊
    <button @click="toggle">点击切换</button>
  </div>
</template>

<script lang="ts" setup>
import { loadingData } from "@/components/loading/loading";
import { ref } from "@vue/reactivity";
import { Button, Rate } from "vant";
const value = ref(0);


function onConfirm() {
  console.log(123);
}

function toggle() {
  console.log(loadingData);
  loadingData.visible=false
  loadingData.text = Math.random();
}
</script>

<template>
  <div>
    <div>这是index啊</div>
    <router-link :to="{ name: 'test' }">跳转去test页面</router-link>
    123
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue-demi";

const qwer = ref(123);
console.log(qwer.value);
</script>

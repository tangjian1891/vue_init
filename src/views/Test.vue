<template>
  <div>
    <Button type="primary" @click="router.go(-1)">返回</Button>
    <hr />
    <Button type="primary" @click="showLoading">点击出现loading.2后关闭</Button>
    <hr />
    <Button type="primary" @click="showToa">点击出现toa,自定义长度</Button>
    <hr />
    <div class="qwer">pinia使用</div>
    <div>{{ productStore.count }}</div>
    <Button type="primary" @click="productStore.count++">点击次数增加</Button>
    <Button type="primary" @click="productStore.$reset()">重置</Button>
  </div>
</template>

<script lang="ts" setup>
import { closeLoading, openLoading } from "@/components/loading";
import { toa } from "@/components/toa";
import { useProductStore } from "@/store/productStore";
import { Button } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();

const productStore = useProductStore();

function showLoading() {
  openLoading();
  setTimeout(() => {
    closeLoading();
  }, 2000);
}

function showToa() {
  console.log("触发执行");
  // toa("什么啊什么啊 么啊");
  toa(
    "什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊什么啊 么啊"
  );
}
</script>
<style>
.qwer{
  font-size: 16px;
}
</style>

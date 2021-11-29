<template>
  <div>
    这是loading组件啊
    <div>还可以</div>
    <div v-show="visible" ref="loadingRef" class="_loading">
      <div class="bg-shadow">
        <img class="rotate_img" src="~@/assets/images/loading.png" />
        <p>{{ props.text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted ,computed} from "@vue/runtime-core";

const props= defineProps(['visible','text'])
// const visible = ref(false);
// const text = ref("加载中。。。");
const loadingRef = ref<HTMLElement>(null);

let a=computed(()=>{
  console.log(props.text);
  return props.text
})
onMounted(() => {
  console.log(props,'这是注入的参数');
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

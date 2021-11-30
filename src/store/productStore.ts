import { defineStore } from "pinia";
export const useProductStore = defineStore("product", {
  state: () => {
    return {
      count: 1,
      str: "可以啊",
    };
  },
});

const productStore = useProductStore();

// productStore.$subscribe((mutation, state) => {
//   console.log("变化了");
//   console.log(mutation);
//   console.log(state);
// });

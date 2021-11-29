import { createRouter, createWebHistory, Router } from "vue-router";
import syRouter from "./sy-router";
import tjRouter from "./tj-router";

// const router:Router= createRouter({})
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/index",
      name: "index",
      component: () => import("@/views/Index.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    ...tjRouter,
    ...syRouter,
  ],
});

export default router;

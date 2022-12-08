import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';
type RouteConfig = RouteRecordRaw & {hidden?: boolean}; //hidden 是可选属性
import Layout from "../Layout/index.vue";

const routes: Array<RouteConfig> = [
 {
  path: "/",
  redirect: "/dashboard",
  hidden :true,
 },
  {
    path: "/dashboard",
    component: Layout,
    meta: { title: "Dashboard", icon: "House" },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        meta: { title: "Dashboard", icon: "House" },
      }
    ],
  },
  {
    path: "/exaple",
    component: Layout,
    meta: { title: "exaple", icon: "House"},
    children: [
      {
        path: "table",
        name: "table",
        component: () => import("@/views/table/index.vue"),
        meta: { title: "table", icon: "House" },
      },
      {
        path: "form",
        name: "form",
        component: () => import("@/views/table/form.vue"),
        meta: { title: "form", icon: "House" },
      }
    ],
  },
  {
    path: "/test",
    component: Layout,
    meta: { title: "test", icon: "House" },
    children: [
      {
        path: "",
        name: "test",
        component: () => import("@/views/test/index.vue"),
        meta: { title: "test", icon: "House" },
      }
    ],
  },
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})


export default router;

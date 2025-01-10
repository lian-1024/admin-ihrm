import type { RouteRecordRaw } from "vue-router";

export default {
  path: '/',
  redirect: "/dashboard",
  name: 'department',
  component: () => import("@/core/layouts/default.vue"),
  children: [
    {
      path: '/department',
      component: () => import("@/modules/department/views/index.vue"),
      meta: {
        title: "nav.department",
        icon: "ApartmentOutlined",
      }
    }
  ]
} satisfies RouteRecordRaw 
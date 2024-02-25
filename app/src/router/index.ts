import * as vueRouter from 'vue-router';

const _routes: Array<vueRouter.RouteRecordRaw> = [
  {
    path: "/",
    name: "Homepage",
    component: () => import(/* webpackChunkName: "homepage" */ '@pages/Homepage.vue'),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import(/* webpackChunkName: "users" */ '@pages/Users.vue'),
  }
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: _routes,
});

export default router;
import Vue from "vue";
import Router from "vue-router";

// 主容器组件
import Layout from "../layout";

// 登录
import Login from "@/views/login";

Vue.use(Router);

import home from "./modules/home.js";
import ceshi from "./modules/ceshi.js";
export const subRoutes = [home, ceshi];

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    beforEnter: (to, from, next) => {
      next("/login");
    },
  },
  // {
  //     path: '/',
  //     // redirect: '/home/login'
  //     redirect: '/home/ceShi'
  // },
  // {
  //     path: '/home/ceShi',
  //     name: 'home',
  //     component: Home,
  //     children: [
  //         {path: '/home/ceShi', component: CeShi}
  //     ]
  // }
  {
    path: "/",
    name: "",
    // component: () => import('../layout'),
    component: Layout,
    // redirect: subRoutes[0].path,
    children: subRoutes,
  },
];

export default new Router({
  routes,
});

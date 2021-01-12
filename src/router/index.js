import Vue from 'vue';
import Router from 'vue-router';

// 主容器组件
import Home from '../layout';

// 登录
import Login from '@/views/login';

Vue.use(Router);

import ceshiOne from './modules/ceshi-one';
export const subRoutes = [
    ceshiOne
]

const routes = [
    // {
    //     path: '/home/login',
    //     name: 'login',
    //     component: Login,
    //     // beforEnter: (to, from, next) => {
    //     //     next('/home/login')
    //     // },
    // },
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
        path: '/',
        name: '',
        component: () => import('../layout'),
        redirect: subRoutes[0].path,
        children: subRoutes
    }
];

export default new Router({
    routes
})
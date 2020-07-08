import Vue from 'vue';
import Router from 'vue-router';

// 主容器组件
import Home from '../layout';

// 登录
import Login from '@/views/login';

import CeShi from '../views/ceshi';

Vue.use(Router);

let routes = [
    {
        path: '/home/login',
        name: 'login',
        component: Login,
        beforEnter: (to, from, next) => {
            next('/home/login')
        },
    },
    {
        path: '/',
        redirect: '/home/login'
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {path: '/home/ceShi', component: CeShi}
        ]
    }
];

export default new Router({
    routes
})
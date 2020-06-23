import Vue from 'vue';
import Router from 'vue-router';

import Home from '../layout';
import CeShi from '../views/ceshi';

Vue.use(Router);

let routes = [
    // {
    //     path: '/',
    //     redirect: '/home/CeShi'
    // },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {path: '/home/CeShi', component: CeShi}
        ]
    }
];

export default new Router({
    routes
})
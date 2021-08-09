export default {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
        label: '首页',
        permission: true
    }
}
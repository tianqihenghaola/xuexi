export default {
    path: '/home/ceshi-one',
    name: '/ceshi-one',
    component: () => import('../../views/ceshi-one/index.vue'),
    meta: {
        label: '测试一',
        permission: true
    }
}
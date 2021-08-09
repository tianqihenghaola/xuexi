export default {
    path: '/ceshi',
    name: 'ceshi',
    component: () => import('../../views/ceshi'),
    meta: {
        label: '测试',
        permission: true
    },
    children: [
        {
            path: '/ceshi/ceshi01',
            name: 'ceshi01',
            component: () => import('@/views/ceshi/ceshi-01.vue'),
            meta: {
                label: '测试-01',
                icon: 'el-icon-menu',
                permission: true
            },
        },
        {
            path: '/ceshi/ceshi02',
            name: 'ceshi02',
            component: () => import('@/views/ceshi/ceshi-02.vue'),
            meta: {
                label: '测试-02',
                icon: 'el-icon-menu',
                permission: true
            },
        }
    ]
}
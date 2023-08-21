import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: '/admin',
        component: () => import('@/layouts/admin-layout.vue'),
        children:[
            {
                path: 'dashboard',
                name: 'admin-dashboard',
                component: () => import('@/views/admin-page/index.vue')
            },
            {
                path: 'balance',
                name: 'admin-balance',
                component: () => import('@/views/admin-page/balance.vue')
            },
            {
                path: 'fans-list',
                name: 'admin-fans-list',
                component: () => import('@/views/admin-page/fans-list.vue')
            },
            {
                path: 'fans-interactions',
                name: 'admin-fans-interactions',
                component: () => import('@/views/admin-page/fans-interactions.vue')
            },
            {
                path: 'forest-gallery',
                name: 'admin-forest-gallery',
                component: () => import('@/views/admin-page/forest-gallery/index.vue')
            },
            {
                path: 'forest-gallery/create',
                name: 'admin-forest-gallery-create',
                component: () => import('@/views/admin-page/forest-gallery/form-gallery.vue')
            },
            {
                path: 'forest-gallery/:id/edit',
                name: 'admin-forest-gallery-edit',
                component: () => import('@/views/admin-page/forest-gallery/form-gallery.vue')
            },
            {
                path: 'setting',
                name: 'admin-setting',
                component: () => import('@/views/admin-page/setting/index.vue')
            },
            {
                path: 'setting/faq',
                name: 'admin-setting-faq',
                component: () => import('@/views/admin-page/setting/faq.vue')
            },
            {
                path: 'setting/terms-and-conditions',
                name: 'admin-setting-terms-and-conditions',
                component: () => import('@/views/admin-page/setting/tos.vue')
            },
            {
                path: 'setting/privacy-and-policy',
                name: 'admin-setting-privacy-and-policy',
                component: () => import('@/views/admin-page/setting/pap.vue')
            },
            // keep this as a last one to catch all error route and redirect to default page
            {
                path: ':pathMatch(.*)*',
                redirect: '/admin',
            },
        ]
    }
]
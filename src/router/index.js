import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: { name: 'dashboard' }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "post.index" */ '@/components/views/DashboardComponent.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router
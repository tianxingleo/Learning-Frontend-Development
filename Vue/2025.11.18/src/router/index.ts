import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../App.vue')
        }
        // 在这里添加更多路由
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import('../views/About.vue')
        // }
    ]
})

export default router

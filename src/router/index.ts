import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/MainContentComponents/MainContentPage.vue')
        },
        {
            path: '/services',
            name: 'service',
            component: () => import('@/components/ServicesCommponents/ServisePage.vue')
        },
        {
            path: '/cases',
            name: 'cases',
            component: () => import('@/components/CasesComponents/MainCasePage.vue')
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: () => import('@/components/ContactsComponents/ContactsPage.vue')
        }
    ]
})

export default router

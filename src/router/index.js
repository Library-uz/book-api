import {createRouter, createWebHistory} from 'vue-router'
import {defineAsyncComponent} from "vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=> import('../views/HomePage.vue'),
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
            }
        },
        {
            path: '/book-info',
            name: 'book-info',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/BookInfoPage.vue'),
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
            }
        },
        {
            path: '/login',
            name: 'login',
            component: ()=> import('../views/LoginPage.vue'),
            meta: {
                layout: defineAsyncComponent(() => import('@/layouts/BlankLayouts.vue'))
            }
        },
    ],
})

export default router

import {createRouter, createWebHistory, RouterOptions} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/:catchAll(.*)",
            name: "MainPage",
            component: () => import('@/views/mainPage/MainPage.vue'),
        },
    ],
} as RouterOptions)

export default router
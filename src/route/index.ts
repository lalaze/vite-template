import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../components/HelloWorld')
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'not-found', component: Home },
    ]
})
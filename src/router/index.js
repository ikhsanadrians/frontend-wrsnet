import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home/home.vue'
import Admin from '../page/Admin/Admin.vue'
import Login from '../page/Auth/Login.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    }

]


const router = createRouter({
    history: createWebHistory('/'),
    routes
})


export default router;
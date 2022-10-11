import { createRouter,createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import BuilderPage from '@/pages/BuilderPage.vue';
import Login from '@/pages/LoginPage.vue'
import Register from '@/pages/RegisterPage.vue'

const routes = [
    {
        name: 'Home',
        path : '/',
        component: HomePage
    },    {
        name: 'Builder',
        path : '/buildVPS',
        component: BuilderPage
    },    {
        name: 'Login',
        path : '/login',
        component: Login
    },    {
        name: 'Register',
        path : '/register',
        component: Register
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes, 
})
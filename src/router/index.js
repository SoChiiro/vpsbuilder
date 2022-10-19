import { createRouter,createWebHistory } from "vue-router";
import BuilderPage from '@/pages/BuilderPage.vue';
import Login from '@/pages/LoginPage.vue'

const routes = [
    {
        name: 'Home',
        path : '/',
        component: () => import("../pages/HomePage")
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
        component: () => import("../pages/RegisterPage")
    },{
        name: 'BuilderChoice',
        path : '/BuilderChoice',
        component: () => import("../pages/BuilderChoice")
    },

];


export const router = createRouter({
    history: createWebHistory(),
    routes, 
})
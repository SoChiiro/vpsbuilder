import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        name: 'Home',
        path : '/',
        component: () => import("@/pages/HomePage")
    },    {
        name: 'Builder',
        path : '/buildVPS',
        // component: () => import("@/pages/BuilderPage")
    },    {
        name: 'Login',
        path : '/login',
        component: () => import("@/pages/LoginPage")
    },    {
        name: 'Register',
        path : '/register',
        component: () => import("@/pages/RegisterPage")
    },{
        name: 'BuilderChoice',
        path : '/BuilderChoice',
        component: () => import("@/pages/BuilderChoice")
    },{
        name: 'Windows',
        path : '/Windows',
        component: () => import("@/pages/Windows")
    },

];


export const router = createRouter({
    history: createWebHistory(),
    routes, 
})
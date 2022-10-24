import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        name: 'Home',
        path : '/',
        component: () => import("@/pages/HomePage")
    },    {
        name: 'VPSPage',
        path : '/myvps',
        component: () => import("@/pages/VPSPage")
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
    {
        name: 'Linux',
        path : '/Linux',
        component: () => import("@/pages/Linux")
    },{
        name: 'Mac',
        path : '/Mac',
        component: () => import("@/pages/Mac")
    },{
        name: 'AboutUs',
        path : '/AboutUs',
        component: () => import("@/pages/AboutUs")
    },

];


export const router = createRouter({
    history: createWebHistory(),
    routes, 
})
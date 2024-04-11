import { createRouter, createWebHistory } from 'vue-router';



const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const Contact = () => import('../views/ContactUs.vue');
const Modifiers = () => import('../components/Modifiers.vue');
const Slids = () => import('../components/SlideBar.vue');

const routes = [
    { path: '/', component: () => import('../views/Home.vue')},
    { path: '/about', component: () => import('../views/About.vue')},
    { path: '/contact', component: () => import('../views/ContactUs.vue')},
    { path: '/modifiers', component: () => import('../components/Modifiers.vue')},
    { path: '/slids', component: () => import('../components/SlideBar.vue')},
    
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
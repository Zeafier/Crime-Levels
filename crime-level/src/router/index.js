import { createRouter, createWebHistory } from 'vue-router'
import News from '../views/Crimes.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    {
        path: '/crimes',
        name: 'Crimes',
        component: News
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
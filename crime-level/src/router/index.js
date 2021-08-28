import { createRouter, createWebHistory } from 'vue-router'
import News from '../views/News.vue'
import Home from '../views/Home.vue'
import Crimes from '../views/Crimes.vue'
import Map from '../views/Map.vue'

const routes = [
    {
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/crimes',
        name: 'Crimes',
        component: Crimes
    },
    {
        path: '/map',
        name: 'Map',
        component: Map
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
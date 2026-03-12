import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: LandingPage
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: () => import('../pages/Datenschutz.vue')
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import('../pages/Impressum.vue')
    },
     {
      path: '/lebenslauf',
      name: 'lebenslauf',
      component: () => import('../pages/Lebenslauf.vue')
    }
    ]});

export default router;
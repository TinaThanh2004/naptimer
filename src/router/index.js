import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import ContactMe from '@/views/ContactMe.vue'
import AboutMe from '@/views/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/',
      name: 'about',
      component: AboutMe,
    },
    {
      path: '/',
      name: 'contact',
      component: ContactMe,
    },
  ],
})

export default router

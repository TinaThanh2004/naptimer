import { createRouter, createWebHistory } from 'vue-router'

import NapTimerHome from '@/views/NapTimerHome.vue'
import NapTimerSelect from '@/views/NapTimerSelect.vue'
import NapTimerRunning from '@/views/NapTimerRunning.vue'
import NapTimerAlarm from '@/views/NapTimerAlarm.vue'

import AllItems from '@/views/Info/AllItems.vue'
import ItemDetail from '@/views/Info/ItemDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'nap-home',
      component: NapTimerHome,
    },
    {
      path: '/nap/select',
      name: 'nap-select',
      component: NapTimerSelect,
    },
    {
      path: '/nap/running',
      name: 'nap-running',
      component: NapTimerRunning,
    },
    {
      path: '/nap/alarm',
      name: 'nap-alarm',
      component: NapTimerAlarm,
    },

    // --- Portfolio Routes ---
    {
      path: '/examples/portfolio',
      children: [
        {
          path: '',
          name: 'Portfolio',
          component: AllItems
        },
        {
          path: ':portfolioId',
          name: 'PortfolioItemDetails',
          component: ItemDetail
        }
      ]
    }
  ],
})

export default router




// import { createRouter, createWebHistory } from 'vue-router'
// import NapTimerHome from '@/views//NapTimerHome.vue'
// import NapTimerSelect from '@/views//NapTimerSelect.vue'
// import NapTimerRunning from '@/views//NapTimerRunning.vue'
// import NapTimerAlarm from '@/views//NapTimerAlarm.vue'
// import AllItems from '@/views/Info/AllItems.vue'
// import ItemDetail from '@/views/Info/ItemDetail.vue'
//
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '',
//       name: 'nap-home',
//       component: NapTimerHome,
//     },
//     {
//       path: '/nap/select',
//       name: 'nap-select',
//       component: NapTimerSelect,
//     },
//     {
//       path: '/nap/running',
//       name: 'nap-running',
//       component: NapTimerRunning,
//     },
//     {
//       path: '/nap/alarm',
//       name: 'nap-alarm',
//       component: NapTimerAlarm,
//     },
//     {
//       path: '/examples/portfolio',
//       children: [
//         {
//           path: '',
//           name: 'Portfolio',
//           component: AllItems
//         },
//         {
//           path: ':portfolioId',
//           name: 'PortfolioItemDetails',
//           component: ItemDetail
//         }
//       ]
//     }
//   ],
// })
//
//
// export default router

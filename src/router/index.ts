import { createRouter, createWebHashHistory } from 'vue-router'
import companyContent from '@/modules/company/router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      name: 'principal-app',
      ...companyContent
    },
    // {
    //   path : '/:pathMatch(.*)*',
    //   name : 'noEncontrada',
    //   component: () => import('@/modules/inicio/views/Index.vue')
    // },
  ]
})

export default router

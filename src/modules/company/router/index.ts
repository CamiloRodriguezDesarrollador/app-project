
export default{

  component: () => import("@/modules/company/layouts/IndexLayout.vue"),
  children:[
      {
        path:'',
        name:'index',
        component: () => import('@/modules/company/views/IndexView.vue')
      },
      {
        path:'/parametros',
        name:'parameters',
        component: () => import('@/modules/company/views/ParametersView.vue'),
      },
      {
        path:'/crear-parametro',
        name:'createParameter',
        component: () => import('@/modules/company/views/CreaterParameter.vue'),
      },
      {
        path:'/proyectos',
        name:'projects',
        component: () => import('@/modules/company/views/ProjectsView.vue')
      },
      {
        path:'/control-proyectos',
        name:'controlProjects',
        component: () => import('@/modules/company/views/ControlProject.vue')
      },
      {
        path:'/lineaTiempo',
        name:'lineTime',
        component: () => import('@/modules/company/components/projects/LineTime.vue')
      },
      {
        path:'/recursos',
        name:'resources',
        component: () => import('@/modules/company/views/ResourcesView.vue')
      },
      {
        path:'/calendario',
        name:'calendar',
        component: () => import('@/modules/company/views/CalendarView.vue')
      },
      {
        path:'/canvas',
        name:'canvas',
        component: () => import('@/modules/company/views/CanvasView.vue')
      },
      {
        path:'/presupuesto',
        name:'cost',
        component: () => import('@/modules/company/views/CostView.vue')
      },
      {
        path:'/notificaciones',
        name:'notifications',
        component: () => import('@/modules/company/views/NotificationsView.vue')
      },
      {
        path:'/reportes',
        name:'report',
        component: () => import('@/modules/company/views/ReportView.vue')
      },
      {
        path:'/encuestas',
        name:'forms',
        component: () => import('@/modules/company/views/FormsView.vue')
      },
      {
        path:'/procesos',
        name:'process',
        component: () => import('@/modules/company/views/ProcessView.vue')
      },
      
      // {
      //   path : '/user/:pathMatch(./*)*',
      //   name : 'noEncontrada',
      //   component: () => import('@/modules/company/views/IndexView.vue')
      // },
      
  ]

}



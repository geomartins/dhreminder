
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      {
        path: 'dashboard',
        component: () => import('pages/Dashboard.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'upcoming',
        component: () => import('pages/Upcoming.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

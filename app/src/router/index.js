import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode } from 'jwt-decode'

import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Dashboard from '@/components/ui/Dashboard.vue'
import InvoiceTable from '@/components/ui/InvoiceTable.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  {
    path: '/app',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: Dashboard, meta: { requiresAuth: true } },
      { path: 'invoices', component: InvoiceTable, meta: { requiresAuth: true } },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Add navigation guard. Check token expiry, and userId before navigating to routes.
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('authToken')

  if (to.meta.requiresAuth) {
    if (token === null) return next('/')

    const decodedToken = jwtDecode(token)
    const currentTime = Date.now() / 1000

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('authToken')
      return next('/')
    }
  }
  next()
})

export default router

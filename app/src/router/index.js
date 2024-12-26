import { createRouter, createWebHistory } from 'vue-router'

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
      { path: 'dashboard', component: Dashboard },
      { path: 'invoices', component: InvoiceTable },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

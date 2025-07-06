import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import AddEmployeeView from '@/views/AddEmployeeView.vue'
import EditEmployeeView from '@/views/EditEmployeeView.vue'

console.log('Router  with base URL:', import.meta.env.BASE_URL)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        title: 'Employee Directory'
      }
    },
    {
      path: '/add',
      name: 'add-employee',
      component: AddEmployeeView,
      meta: {
        title: 'Add New Employee'
      }
    },
    {
      path: '/edit/:id',
      name: 'edit-employee',
      component: EditEmployeeView,
      props: true,
      meta: {
        title: 'Edit Employee'
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Employee Directory'
  next()
})

export default router
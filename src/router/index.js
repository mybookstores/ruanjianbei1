import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'myindex',
    component: () => import('../views/myindex.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login2.vue')
  },
  {
    path: '/backend',
    name: 'backend',
    component: () => import('../views/backend.vue')
  },
  {
    path: '/sidebar',
    name: 'sidebar',
    component: () => import('../components/sidebar.vue')
  },
  {
    path: '/robot',
    name: 'robot',
    component: () => import('../components/robot.vue')
  },
  {
    path: '/talk',
    name: 'talk',
    component: () => import('../components/talk.vue')
  },
  {
    path: '/1111',
    name: '1111',
    component: () => import('../views/1111.vue')
  },
  {
    path: '/2222',
    name: '2222',
    component: () => import('../views/2222.vue')
  },
  {
    path: '/3333',
    name: '3333',
    component: () => import('../views/3333.vue')
  },
  {
    path: '/4444',
    name: '4444',
    component: () => import('../views/4444.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

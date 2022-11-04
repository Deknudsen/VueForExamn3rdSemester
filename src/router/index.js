import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue')
  },
  {
    path: '/event/:id',
    name: 'event',
    component: () => import('../views/SingleEventView.vue')
  },
  {
    path: '/createEvent',
    name: 'createEvent',
    component: () => import('../views/CreateEventView.vue')
  },
  {
    path: '/editEvent/:id',
    name: 'editEvent',
    component: () => import('../views/EditEventView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminHomeView.vue')
  },
  {
    path: '/adminEvents',
    name: 'adminEvents',
    component: () => import('../views/AdminEventsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/AdminLoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

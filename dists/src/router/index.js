import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/MainView.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path:'/details/:id',
    name: 'details',
    component: () => import('@/views/Details.vue'),
    meta: {
      keepAlive: false
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router

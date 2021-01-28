import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // 用户访问登录页 直接放行
  if (to.path === '/login') { next() } else {
    // 判断用户是否登录
    const tokenStr = window.sessionStorage.getItem('token')
    if (tokenStr === null) return next('/login')
  }
  next()
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { name: 'login', path: '/login', component: Login },
  { name: 'home', path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

// 路由导航守卫(路由拦截)
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next  是一个函数，表示放行，可以执行下一步
  // next('/login')  强行跳转

  // 判断login页面
  if (to.path === '/login') return next()
  // 判断home
  const tkstr = window.sessionStorage.getItem('token')
  if (!tkstr) {
    return next('/login')
  }
  next()
})

export default router

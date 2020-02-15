import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import './assets/global.css'
// 字体图标样式
import './iconfont/font/iconfont.css'

// 引入axios库
import axios from 'axios'

// 配置基准路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 将axios挂在vue的原型对象上  这样全局就可以使用axios
Vue.prototype.$http = axios
// 配置请求拦截
// axios.intercptors.request.use(function (config) {
//   return config
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import { Form, FormItem, Input, Button, Row, Message } from 'element-ui'

// 全局挂在message $message可以自定义
Vue.prototype.$message = Message
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Row)

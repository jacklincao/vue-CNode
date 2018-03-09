/* eslint-disable */
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import { Row, Col, DatePicker, Form, FormItem, Input, Button, Pagination, Select, Option} from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'

Vue.prototype.$ELEMENT = {size: 'mini'}

Vue.use(Row)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(VueQuillEditor)

Vue.config.productionTip = false // 生产提示关闭
// Vue.prototype.router = router;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

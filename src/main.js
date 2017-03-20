// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'commons/css/reset.css'
import 'weui/dist/style/weui.min.css'
import 'commons/css/index.styl'
import 'mint-ui/lib/toast/style.css'
import { Toast } from 'mint-ui'
import App from './App'
import router from './router'
import store from './stores'

Vue.config.productionTip = false
Vue.component(Toast.name, Toast)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import ElementLang from 'element-ui/lib/locale/lang/en'
import ElementLocale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

ElementLocale.use(ElementLang)

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

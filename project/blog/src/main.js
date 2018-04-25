// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
//默认主题
//import 'element-ui/lib/theme-chalk/index.css'
//自定义主题
import '../theme/index.css'
//注意打包顺序，会导致css样式问题
import App from './App'
Vue.use(ElementUI);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

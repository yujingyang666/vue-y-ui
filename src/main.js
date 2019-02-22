import App from './App.vue'
import router from './router'
import store from './store'

import Vue from 'vue';
import Button from './components/button'
import Icon from './components/icon'
import './assets/js/iconfont.js'


Vue.component('g-button', Button);
Vue.component('g-icon', Icon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

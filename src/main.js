import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/global.styl'
import 'animate.css'
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'
import Axios from 'axios'

fontawesome.library.add(regular);
fontawesome.library.add(solid);
fontawesome.library.add(brands);
Vue.component('fontawesome',FontAwesomeIcon);
Vue.config.productionTip = false
Vue.prototype.$http=Axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

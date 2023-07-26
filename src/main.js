import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import vuetify from './plugins/vuetify'
//import VueSelect from 'vue-select'
//import 'vue-select/dist/vue-select.css';
Vue.config.productionTip = false
//Vue.component("v-select", vSelect);
new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import EventBus from './plugins/EventBus'
import router from './router/router'
import store from './store'
import vuetify from './plugins/vuetify'
//import VueSelect from 'vue-select'
//import 'vue-select/dist/vue-select.css';
Vue.config.productionTip = false
// configure event bus
Vue.prototype.$bus = EventBus
//Vue.component("v-select", vSelect);
new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import EventBus from './plugins/EventBus'
import router from './router/router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSimpleAlert from 'vue-simple-alert'

Vue.config.productionTip = false
// configure event bus
Vue.prototype.$bus = EventBus

new Vue({
  router,
  store,
  vuetify,
  VueSimpleAlert,
  render: function (h) { return h(App) }
}).$mount('#app')

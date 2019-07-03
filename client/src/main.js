import Vue from 'vue'
import App from './App.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.filter('formatDateTime', function (timestamp) {
  return new Date(timestamp).toLocaleString()
})

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')

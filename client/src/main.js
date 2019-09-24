import Vue from 'vue'
import App from './App.vue'

import HighchartsVue from 'highcharts-vue'

Vue.config.productionTip = false

export const eventBus = new Vue();

Vue.use(HighchartsVue);

new Vue({
  render: h => h(App),
}).$mount('#app')

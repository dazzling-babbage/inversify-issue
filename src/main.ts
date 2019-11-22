import Vue from 'vue'
import VueLogger from 'vuejs-logger'
import VeeValidate from 'vee-validate'
import './container'
import { router } from './router'
import store from './store'
import App from './App.vue'
import 'typeface-open-sans'

Vue.config.productionTip = false
Vue.use(VeeValidate, { inject: false })

Vue.use(VueLogger, {
    isEnabled: true,
    logLevel: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

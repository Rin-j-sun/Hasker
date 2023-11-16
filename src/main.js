import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import store from './store/store.js'
import router from './router/router.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
    store,
    router,
    render: h => h(App),
})
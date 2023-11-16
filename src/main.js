import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import store from './store/store.js'
import index from './router/index.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
    store,
    router: index,
    render: h => h(App),
})
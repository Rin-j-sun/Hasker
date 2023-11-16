// реализацию самой бизнес-логики делать НЕ нужно.
// Нужно создать объект хранилища и сразу же разделить его на модули:
import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        blog,
    },
})
import Vue from 'vue'
import Router from 'vue-router'
import MainView from './views/MainView.vue'

Vue.use(Router)

export const router = new Router({
    routes: [
        {
            component: MainView,
            path: ''
        }
    ]
})

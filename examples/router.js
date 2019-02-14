import Vue from 'vue'
import Router from 'vue-router'

const Menu = () => import('@/Nav.vue')
const Test = () => import('@/components/Test.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/test', component: Test },
    { path: '*', component: Menu }
  ]
})
import Vue from 'vue'
import VueRouter from 'vue-router'

import TrainProblem from './components/TrainProblem'
import GeneralInfo from './components/GeneralInfo.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/training', component: TrainProblem },
  { path: '/info', component: GeneralInfo }
]

export const router = new VueRouter({
  routes // short for routes: routes
})

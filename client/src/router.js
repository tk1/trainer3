import Vue from 'vue'
import VueRouter from 'vue-router'

import TrainProblem from './components/TrainProblem'
import GeneralInfo from './components/GeneralInfo.vue'
import LogIn from './components/LogIn.vue'
import LogOut from './components/LogOut.vue'
import SignUp from './components/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: LogIn },
  { path: '/logout', component: LogOut },
  { path: '/signup', component: SignUp },
  { path: '/training', component: TrainProblem },
  { path: '/info', component: GeneralInfo }
]

export const router = new VueRouter({
  routes // short for routes: routes
})

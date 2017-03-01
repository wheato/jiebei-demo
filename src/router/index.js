import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Login from '../page/login'
import Loan from '../page/loan'
import Confirm from '../page/confirm'
import BindCard from '../page/bindCard'
import ChooseCard from '../page/chooseCard'
import Success from '../page/success'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/loan',
    name: 'Loan',
    component: Loan
  }, {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm
  },  {
    path: '/chooseCard',
    name: 'chooseCard',
    component: ChooseCard
  }, {
    path: '/bindCard',
    name: 'bindCard',
    component: BindCard
  }, {
    path: '/success',
    name: 'success',
    component: Success
  }
]

export default new Router({
  routes
})

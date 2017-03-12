import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Loan from '../page/loan'
import Confirm from '../page/confirm'
import BindCard from '../page/bindCard'
import ChooseCard from '../page/chooseCard'
import PrewView from '../page/preview'
import Success from '../page/success'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
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
    component: ChooseCard,
    beforeEnter: (to, from, next) => {
      if(from.path !== '/confirm' && from.path !== '/bindCard'){
        next('/')
      } else {
        next();
      }
    }
  }, {
    path: '/bindCard',
    name: 'bindCard',
    component: BindCard,
    beforeEnter: (to, from, next) => {
      if(from.path !== '/chooseCard' && from.path !== '/confirm'){
        next('/')
      } else {
        next();
      }
    }
  }, {
    path: '/preview',
    name: 'preview',
    component: PrewView
  }, {
    path: '/success',
    name: 'success',
    component: Success
  }
];

export default new Router({
  routes
})

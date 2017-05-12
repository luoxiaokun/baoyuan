import Vue from 'vue'
import Router from 'vue-router'
import welcomeRouter from './welcome'
import productRouter from './product'
import orderRouter from './order'
import addressRouter from './address'
import {categoryRouter, subCategoriesRouter} from './type'
import {userProfileRouter, userFavRouter} from './profile'
import groupRouter from './group'
import collectRouter from './collect'
import orderTypeRouter from './orderType'
import groupStatusRouter from './groupStatus'
Vue.use(Router)

const router = new Router({
  routes: [
    welcomeRouter,
    categoryRouter,
    subCategoriesRouter,
    productRouter,
    orderRouter,
    addressRouter,
    userProfileRouter,
    userFavRouter,
    groupRouter,
    collectRouter,
    orderTypeRouter,
    groupStatusRouter
  ],
  linkActiveClass: 'active'
})

export default router

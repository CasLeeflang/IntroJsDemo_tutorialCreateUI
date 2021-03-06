import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateTutorial from "@/Modules/Tutorial/Components/CreateTutorial";
import CreateStep from  "@/Modules/Tutorial/Components/CreateStep";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: CreateTutorial
  },
  {
    path: '/addSteps/:title/:category',
    name: 'addSteps',
    component: CreateStep,
    props: true
  },
  {
    path: '/addSteps/:title',
    name: 'addSteps',
    component: CreateStep,
    props: true
  },
  {
    path: '/addSteps/:category',
    name: 'addSteps',
    component: CreateStep,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

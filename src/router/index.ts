import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HateSpeech from '../components/HateSpeech.vue'
import Signin from '../components/Signin.vue'
import Signup from '../components/Signup.vue'
import Settings from '../components/Settings.vue'
import firebase from "firebase/compat/app"
import Home from '../components/Home.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hatespeech',
    name: 'hatespeech',
    component: HateSpeech
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
    meta: { guestOnly: true}
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    meta: { guestOnly: true}

  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,

  },
 
//   { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// auth setup
router.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const guestOnly = to.matched.some(record => record.meta.guestOnly)
  const isAuthenticated = firebase.auth().currentUser

  if(requiresAuth && !isAuthenticated) {
    next('/signin')
  } else if (isAuthenticated && guestOnly){
    next('/hatespeech')
  } else {
    next()
  }
})

// router.beforeEach((to, from, next) => {
// // 

// })

export default router

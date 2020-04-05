import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import guest from "./middleware/guest";
import auth from "./middleware/auth";
// import isSubscribed from "./middleware/isSubscribed";
import middlewarePipeline from "./middlewarePipeline";

Vue.use(VueRouter)

const routes = [
  {
    path: '/', name: 'Home',
    component: Home
  },
  {
    path: '/login', name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      middleware: [guest]
    }
  },
  {
    path: '/register', name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      middleware: [guest]
    }
  },
  {
    path: '/forgot-password', name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
      middleware: [guest]
    }
  },
  {
    path: '/create', name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/post/:slug', name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/dashboard', name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/profile/:slug', name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

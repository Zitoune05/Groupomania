import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import MyAccount from '../views/MyAccount.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup

  },
  {
    path: '/Signin',
    name: 'Signin',
    component: Signin

  },
  {
    path: '/MyAccount',
    name: 'MyAcchount',
    component: MyAccount
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
  
]

const router = new VueRouter({
  routes
})

export default router

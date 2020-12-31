import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import MyAccount from '../views/MyAccount.vue'
import updateUser from '../components/Account/update.vue'
import CardPost from '../components/Posts/CardPost.vue'
import createPost from '../components/Posts/CreatePost.vue'


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
    path: '/login',
    name: 'login',
    component: Signin

  },
  {
    path: '/profil',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/users/update',
    name: 'updateUser',
    component: updateUser
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/mur',
    name: 'CardPost',
    component: CardPost
  },
  {
    path: '/createpost',
    name: 'createPost',
    component: createPost
  }
  
]

const router = new VueRouter({
  routes
})

export default router
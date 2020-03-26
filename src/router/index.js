import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Register from '../views/Register.vue'
import addProduct from '../views/addProduct.vue'
import productDetails from '../views/productDetails.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {default: Home, header: Navbar, footer: Footer},
  },
  {
    path: '/register',
    name: 'Register',
    components: {default: Register, header: Navbar, footer: Footer},
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    components: {default: addProduct, header: Navbar, footer: Footer},
  },
  {
    path: '/productDetails',
    name: 'productDetails',
    components: {default: productDetails, header: Navbar, footer: Footer},
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/') 
//   } else {
//     next() 
//   }
// })

export default router

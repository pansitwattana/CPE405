import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Login from '@/components/Login'
// import Signup from '@/components/Signup'
// import FirebaseAuth from '@/components/FirebaseAuth'
// import Signup2 from '@/components/SignupValidate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },
  ],
  mode: 'history',
})

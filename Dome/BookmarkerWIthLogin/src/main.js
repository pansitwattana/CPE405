// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import Validator from 'vue-validator'
import App from './App'
import router from './router'

var config = {
  apiKey: "AIzaSyAuRPtv4idwAndUSJia8dIJYyampnrlgMc",
  authDomain: "bookmarkervue.firebaseapp.com",
  databaseURL: "https://bookmarkervue.firebaseio.com",
  projectId: "bookmarkervue",
  storageBucket: "",
  messagingSenderId: "513062758147"
}
firebase.initializeApp(config);

// Vue.config.productionTip = false
Vue.use(Validator)

router.beforeEach( (to, from, next) => {
  var currentUser = firebase.auth().currentUser;

  var requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser)
    next({ name: 'Login' });  
  else if (!requiresAuth && currentUser)
    next({ name: 'Home' });
  else
    next();
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
const app = new Vue({
  router,
  template: '<App />',
  components: { App }
}).$mount('#app')
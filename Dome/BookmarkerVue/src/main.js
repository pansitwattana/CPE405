// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import VueResource from 'vue-resource';
import App from './App'
import router from './router'

firebase.initializeApp(config);

Vue.config.productionTip = false
Vue.use(VueResource)

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
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

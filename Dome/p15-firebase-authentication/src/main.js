// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
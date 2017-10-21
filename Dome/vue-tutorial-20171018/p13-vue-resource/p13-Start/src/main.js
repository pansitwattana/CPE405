import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)
Vue.http.options.root = 'https://vue-resource-tutorial-2514e.firebaseio.com/users.json'

Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST') {
    request.method = 'PUT';    
  }
  next(response => {      // this will intercept all reponses
    console.log(response.body);
    response.json = () => { return {messages: response.body } }   // replace with an object with a key
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})

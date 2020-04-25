import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from './init_firebase'

Vue.config.productionTip = false

const unsubscribe = firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
  unsubscribe();
});
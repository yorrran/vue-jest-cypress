import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './router';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

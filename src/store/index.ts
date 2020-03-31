import Vuex from 'vuex';
import Vue from 'vue';

if (process.env.NODE_ENV === 'test') {
  Vue.use(Vuex);
}
const store = new Vuex.Store({});

export default store;

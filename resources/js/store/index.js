import { createStore } from 'vuex'
import handicapsModule from './handicaps.js';

const store = createStore({
  state() {
  },
  modules: {
    handicaps: handicapsModule
  }
})
export default store;

import { createStore } from 'vuex'
import handicapsModule from './handicaps.js';

const store = createStore({
  state() {
      return {
          lastFetch: null,
          currentCategory: '',
          currentHandicap: ''
      }
  },
  modules: {
    handicaps: handicapsModule
  }
})
export default store;

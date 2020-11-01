import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "https://api.punkapi.com/v2/";

export default new Vuex.Store({
  state: {
    beers: []
  },
  actions: {
    fetchBeers({commit}) {
      axios.get('beers').then(beers => {
        commit('SAVE_BEERS', beers.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  mutations: {
    SAVE_BEERS(state, beers) {
      state.beers = beers;
    }
  }
})
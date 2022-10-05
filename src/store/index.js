import Vue from 'vue'
import Vuex from 'vuex'
import { setlotionToken, getlotionToken, setlotionuser, getlotionuser } from "../utils/auth";
import { handelLogin } from "../aip/login";
import modu from "./modules/modules"
import getters from "./getters/getters"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getlotionToken() || '',
    user: '',
  },
  getters: {
    TOKEN(state) {
      return state.token
    }
  },
  mutations: {
    handleLogin(state, obj) {
      console.log(obj);
      state.token = obj.token
      setlotionToken(obj.token)
    }
  },
  actions: {
    async handleLogin({ commit }, str) {
      try {
        const hanLog = await handelLogin(str);
        commit('handleLogin', hanLog)
        return hanLog
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters,
  modules: {
    modu
  }
})

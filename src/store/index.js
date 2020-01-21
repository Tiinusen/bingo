import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const APP_CAST_CHANNEL = 'urn:x-cast:com.tiinusen.cast.bingo';

var _instance = null;

export default new Vuex.Store({
  state: {
    text: "Not Set"
  },
  mutations: {
    updateText(state, text) {
      state.text = text
    }
  },
  actions: {
    initializeCast({ commit }, { castInstance, castType }) {
      _instance = castInstance
      if (castType === 'Receiver') {
        _instance.addCustomMessageListener(APP_CAST_CHANNEL, function (customEvent) {
          commit('updateText', JSON.stringify(customEvent))
        });
        _instance.start()
      }
    },
    updateText({ commit, dispatch, state }, text) {
      commit('updateText', text)
      dispatch('pushStateToReceiver')
    },
    pushStateToReceiver({ state }) {
      if (_instance.getCurrentSession() !== null) {
        _instance.getCurrentSession().sendMessage(APP_CAST_CHANNEL, state)
      }
    }
  },
  modules: {
  }
})

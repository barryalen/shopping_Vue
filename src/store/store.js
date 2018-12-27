import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    isLogin: 0,
    targetRouterPath: '/user'
  },
  getters: {
    getHisPath: function (state) {
      return state.targetRouterPath
    }
  },
  mutations: {
    loginStatusUpdate: function (state) {
      var co = document.cookie.split(';')
      for (var i = 0; i < co.length; i++) {
        var c = co[i].trim().split('=')
        if (c[0].trim() === 'u_uuid' && c[1].trim() !== '') {
          state.isLogin = 1
          return false
        }
      }
      state.isLogin = 0
    },
    updateRouterPath (state, path) {
      state.targetRouterPath = path
    }
  }
})

module.export = store

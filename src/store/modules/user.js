import storage from 'good-storage'

const USERINFO = '__userInfo__'
const USERTOKEN = '__userToken__'

const user = {
  state: {
    userInfo: storage.session.get(USERINFO),
    userToken: storage.session.get(USERTOKEN)
  },

  mutations: {
    SET_USERINFO: (state, query) => {
      state.userInfo = query
    },
    SET_USERTOKEN: (state, query) => {
      state.userToken = query
    }
  },

  actions: {
    setUserInfo ({
      commit
    }, query) {
      commit('SET_USERINFO', storage.session.set(USERINFO, query))
    },
    setUserToken ({
      commit
    }, query) {
      commit('SET_USERTOKEN', storage.session.set(USERTOKEN, query))
    }
  }
}

export default user

import storage from 'good-storage'

const SIDEBAR = '__sidebar__'

const app = {
  state: {
    sidebar: storage.session.get(SIDEBAR)
  },

  mutations: {
    SET_SIDEBAR: (state, query) => {
      state.sidebar = query
    }
  },

  actions: {
    setSidebar ({
      commit
    }, query) {
      commit('SET_SIDEBAR', storage.session.set(SIDEBAR, query))
    }
  }
}

export default app

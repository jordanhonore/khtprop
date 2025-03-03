import { createStore } from 'vuex'

export default createStore({
  state: {
    announcements: [],
    serviceRequests: []
  },
  mutations: {
    SET_ANNOUNCEMENTS(state, announcements) {
      state.announcements = announcements
    },
    ADD_SERVICE_REQUEST(state, request) {
      state.serviceRequests.push(request)
    }
  },
  actions: {
    fetchAnnouncements({ commit }) {
      // API call would go here
      const announcements = []
      commit('SET_ANNOUNCEMENTS', announcements)
    },
    submitServiceRequest({ commit }, request) {
      // API call would go here
      commit('ADD_SERVICE_REQUEST', request)
    }
  }
})
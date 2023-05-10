import { createStore } from 'vuex'

export default createStore({
  state: {
    destination: '',
    checkInDate: null,
    checkOutDate: null,
    adultsCount: 0,
    childrenCount: 0
  },
  getters: {
  },
  mutations: {
    setDestination (state, newVal) {
      state.destination = newVal
    },
    setCheckInDate (state, newVal) {
      state.checkInDate = newVal
    },
    setCheckOutDate (state, newVal) {
      state.checkOutDate = newVal
    },
    setAdultsCount (state, newVal) {
      state.adultsCount = newVal
    },
    setChildrenCount (state, newVal) {
      state.childrenCount = newVal
    }
  },
  actions: {
  },
  modules: {
  }
})

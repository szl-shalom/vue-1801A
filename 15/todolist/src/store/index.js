import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let id = 0;
export default new Vuex.Store({
  state: {
    list: [],
    checked: false,
  },
  mutations: {
    changeChecked(state, checked) {
      state.checked = checked
    },
    addData(state, obj) {
      state.list.push({
        ...obj,
        id: ++id,
      })
    },
    remove(state, id) {
      state.list = state.list.filter(item => +item.id !== +id)
    }
  },
  actions: {},
  modules: {}
})
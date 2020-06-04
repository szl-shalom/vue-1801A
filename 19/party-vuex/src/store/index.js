import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 活动信息
    action: {},
    // 报名人的列表
    list: [],
  },
  mutations: {
    setAction(state, obj) {
      state.action = obj
    },
    addList(state, obj) {
      state.list.push({
        ...obj,
        id: Math.random().toString().slice(2)
      })
    },
  },
  actions: {},
  modules: {}
})
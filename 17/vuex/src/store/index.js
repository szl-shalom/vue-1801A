import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let id = 0;
export default new Vuex.Store({
  // 存放数据
  state: {
    todos: []
  },
  // 存放方法
  mutations: {
    add(state, obj) {
      state.todos.push({
        ...obj,
        id: id++,
      })
    },
    del(state, id) {
      state.todos = state.todos.filter(item => +item.id !== +id)
    }
  },
  // 存放数据
  getters: {
    list(state) {
      return state.todos.filter(item => item.age > 20)
    }
  },


  actions: {},
  modules: {}
})
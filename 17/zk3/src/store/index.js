import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [{
      name: "机票",
      children: ["国内机票1", "国际-港澳机票2"]
    }, {
      name: "酒店",
      children: ["国内机票3", "国际-港澳机票4"]
    }, {
      name: "火车票",
      children: ["国内机票5", "国际-港澳机票6"]
    }],
    arr: [{
      price: Math.random().toString().substr(2, 4),
    }, {
      price: Math.random().toString().substr(2, 4)
    }, {
      price: Math.random().toString().substr(2, 4)
    }, {
      price: Math.random().toString().substr(2, 4)
    }, {
      price: Math.random().toString().substr(2, 4)
    }, {
      price: Math.random().toString().substr(2, 4)
    }, {
      price: Math.random().toString().substr(2, 4)
    }, {
      price: Math.random().toString().substr(2, 4)
    }, {
      price: Math.random().toString().substr(2, 4)
    }]
  },
  mutations: {
    add(state) {
      for (let i = 0; i < 9; i++) {
        state.arr.push({
          price: Math.random().toString().substr(2, 4)
        })
      }
    },
    slideUp(state) {
      state.arr = state.arr.slice(0, 9)
    }
  },
  actions: {},
  modules: {}
})
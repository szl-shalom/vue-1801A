import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let ind = 1000;
export default new Vuex.Store({
  state: {
    list: [{
      title: "item1",
      flag: true,
      id: 1,
    }, {
      title: "item2",
      flag: false,
      id: 2,
    }, {
      title: "item3",
      flag: true,
      id: 3,
    }]
  },
  getters: {
    finish: state => state.list.filter(item => item.flag),
    process: state => state.list.filter(item => !item.flag),
  },
  mutations: {
    add: (state, obj) => state.list.push({
      ...obj,
      id: ++ind
    }),
    // 通过ID去重
    del: (state, id) => state.list = state.list.filter(item => +item.id !== +id)
  },
  actions: {},
  modules: {},
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 放数据   ------ 相当于组件的data
  state: {
    num1: 2,
    num2: 1,
    list: [{
      title: "item1",
      done: false
    }, {
      title: "item2",
      done: false
    }, {
      title: "item3",
      done: true
    }, {
      title: "item4",
      done: false
    }]
  },
  // 放方法  ---------- 相当于组件的methods
  mutations: {
    // 方法的第一个参数必须是state
    add(state) {
      state.num1++;
    }
  },
  // 放依赖属性  --------- 相当于组件的computed
  getters: {
    finishList: state => state.list.filter(item => item.done)
  },


  actions: {},
  modules: {}
})
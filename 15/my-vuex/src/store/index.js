import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// VueX是一个vue的状态管理工具
// 其实就是提供管理数据工具库，方便维护数据
let id = 0;
export default new Vuex.Store({
  // 存放数据 -----  对应组件的数据 data
  // 不建议直接修改
  state: {
    num1: 1,
    num2: 2,
    todos: [{
        title: "吃饭",
        done: true,
      }, {
        title: "睡觉",
        done: false,
      },
      {
        title: "学习",
        done: true,
      }, {
        title: "做个人吧",
        done: false,
      }
    ],
    list: [],
  },
  // 根据数据派生一些数据 ----- 对一个组件中的计算属性 computed
  getters: {
    finish: state => state.todos.filter(item => item.done)
  },
  // 更新数据的方法 ----------  对一个组件中的方法 methods
  mutations: {
    increment(state, val) {
      console.log(val)
      state.num1 += val;
    },
    addToList(state, opt) {
      state.list.push({
        ...opt,
        id: ++id,
      })
    }
  },
  actions: {},
  modules: {},
})
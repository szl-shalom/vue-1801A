import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Axios from "axios";

export default new Vuex.Store({
  state: {
    list: [], //存放书店的数据
    userList: [], //用户订购的图书
  },
  mutations: {
    // 赋值list数据
    setList(state, arr) {
      state.list = arr;
    },
    // 添加userList数据的方法
    addUserList(state, obj) {
      state.userList.push(obj)
    },
    // 根据id删除userList的数据
    del(state, id) {
      state.userList = state.userList.filter(item => +item.id !== +id)
    }
  },
  actions: {
    getList(context) {
      // 请求数据
      Axios.get("/api/getData").then(res => {
        // 调用mutations方法 setList  
        context.commit("setList", res.data)
        console.log(res.data)
      })
    }
  },
  modules: {}
})
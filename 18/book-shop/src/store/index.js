import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: "",
    list: [],
    ind: 0,
    userList: [],
  },
  mutations: {
    quit(state) {
      localStorage.removeItem("token", "admin")
      state.username = "";
    },
    addUserList(state, obj) {
      state.userList.push(obj)
    },
    del(state, id) {
      state.userList = state.userList.filter(item => +item.id !== +id)
    }
  },
  actions: {
    getLogin(context, data) {
      // 登录
      return new Promise((resolve, reject) => {
        Axios.post("/api/user/login", data).then(res => {
          if (res.data.code) {
            context.state.username = res.data.username
            resolve("登录成功")
          } else {
            reject(res.data.mess)
          }
        })
      })

    },
    getData({
      state
    }) {
      Axios.get("/api/list").then(res => {
        state.list = res.data;
        console.log(state.list)
      })
    }
  },
  modules: {}
})
import { createStore } from 'vuex';
import authService from "@/Services/AuthService";

export default createStore({
  state: {
    user:{
      username:"",
      password:"",
      roles:[]
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

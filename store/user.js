/*
*  In this section is responsible for all
*  information related to The user
*/

//State
export const state= () => ({
  user:{},
  Users:[]
})

//Getters
export const getters={
     getUser: state => state.user,
     get_Users: state => state.Users
}

//Actions
export const actions={
  async getUser({commit},ID){
    let user = await this.$axios.get("http://localhost:8080/api/v1/management/user/"+ID);
    commit('SetUser',user.data);
    return user.data;
  }
}

//Mutation
export const mutations={
  SetUser(state,user){
     state.user = user;
  }
}

/*
*  In this section is responsible for all
*  information related to The user
*/

//State
export const state= () => ({
  user:{},
  Users:[],
  error:{}
})

//Getters
export const getters={
     getUser: state => state.user,
     get_Users: state => state.Users,
     get_error: state => state.error
}

//Actions
export const actions={

  async getUserById({commit},ID){

    await this.$axios.get(process.env.ManagementURl+"user/"+ID,
      {headers:{ 'Authorization': 'Bearer '+localStorage.getItem('Access_Tokens')}}
    ).then(
      response =>{commit('SetUser',response.data);}
    ).catch(function (error){
      console.log("HTTP Status: ",error.response.status)
      console.log("HTTP Status: ",error.response.data)

      let error_message = {
        message: "User does not exist."
      }
      commit('Set_UserError',error_message)
    });

  }
}

//Mutation
export const mutations={
  SetUser(state,user){
     state.user = user;
  },

  Set_UserError(state,payload){
    state.error = payload;
  }
}

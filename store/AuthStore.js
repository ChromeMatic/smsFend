/*
*  In this Store is responsible for all
*  information related to the Authentication
*  service
*/

//State
export const state=()=>({
   AccessToken:{},
   RefreshToken:{},
   ErrorMessage:{
     show:false,
     message:''
   }
})

//Getters
export const getters={
  GetLoginError: state => state.ErrorMessage,
}

//Actions
export const actions={
    // Login action
    async Login({commit},user){
      // call out to the api to get information
      await this.$axios.post(process.env.AUTH_URL+"login?username="
      +user.username+"&password="+user.password)
      .then( response => {
        // Calls the mutation function
        commit('SetTokens',response.data)
      }).catch(function (error){
        // Display's error for debugging
        console.log(error.response.message);
        let err ={show:true, message:"Error in login, try again."}
        commit("SetErrorMessage",err);
      });
    },

   RestErrorObj({commit}){
      // this calls the mutation for SetErrorMessage,
      // to reset the error object.
      let err={show:false, message:""}
     commit("SetErrorMessage",err);
   }
}

//Mutations
export const  mutations={
  // This mutation sets tokens in localStorage
  SetTokens(state,tokens){

    state.AccessToken = tokens.access_Token;
    state.RefreshToken = tokens.refresh_Token;

    localStorage.setItem('Access_Tokens',state.AccessToken);
    localStorage.setItem('Refresh_Tokens',state.RefreshToken);
  },

  // This mutation sets
  SetErrorMessage(state,payload){state.ErrorMessage = payload;}

}

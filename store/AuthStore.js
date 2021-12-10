/*
*  In this Store is responsible for all
*  information related to the Authentication
*/

//State
export const state=()=>({
   AccessToken:{},
   RefreshToken:{},
})

//Actions
export const actions={

    async Login({commit},user){

      const tokens = await this.$axios.post(process.env.AUTH_URL+"login?username="
      +user.username+"&password="+user.password);
      commit('SetTokens',tokens.data);

      console.log("Status :",tokens.status)
      return tokens.data;
    },

}

//Mutations
export const  mutations={
  SetTokens(state,tokens){

    state.AccessToken = tokens.access_Token;
    state.RefreshToken = tokens.refresh_Token;

    localStorage.setItem('Access_Tokens',state.AccessToken);
    localStorage.setItem('Refresh_Tokens',state.RefreshToken);
  }

}

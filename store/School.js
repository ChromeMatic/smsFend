/*
*  In this section is responsible for all
*  information related to the School/Schools
*/

//State
export const state=()=>({
  School:{},
  Schools:[],
  ErrorObj:{}
});

//Getters
export const getters={
  getSchool: state => state.School,
  getAllSchools: state => state.Schools,
  getErrorO:state => state.ErrorObj,
}

//Actions
export const actions={

  async getSchoolByName({rootState, rootGetters,commit},schoolName){

    await this.$axios.get(process.env.ManagementURl+"schoolName/"
        +schoolName, {headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('Access_Tokens')
        }}
      ).then(response =>{commit('setSchool',response.data);})
      .catch( function (error){
        console.log(error.response.data);
        console.log(error.response.status);

        let err ={message:"School does not exist!"}
        commit('set_Error',err);
    });

  },

  async getSchools({commit}){
    await this.$axios.get(process.env.ManagementURl+"schools",
      {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('Access_Tokens')}
      }
    ).then( response => {commit('setSchoolArray',response.data);})
      .catch(function (error){
        console.log("HTTP Status: ",error.response.status);
        console.log("error message: ",error.response.data);

        let err ={message:"Error in receiving data."}
        commit('set_Error',err);
      });
  },

  async getSchoolById({commit},Id){
    let schoolObj = await this.$axios.get(process.env.ManagementURl+"school/"+
        Id,{headers: {'Authorization': 'Bearer ' + localStorage.getItem('Access_Tokens')}
    });
    commit('setSchool',schoolObj.data);
    return schoolObj.data;
  },

  async SaveNewSchool(school){
    let newSchool = await this.$axios.post("");
  },

  async editSchoolById(Id,school){
      let obj = await this.$axios.$put("/"+Id);
  },

  async editSchoolByName(schoolName,school){
      let schObj = await this.$axios.put("/"+schoolName);
  },

}

//Mutations
export const mutations={
  setSchool(state,schoolObj){
    state.School = schoolObj;
  },
  setSchoolArray(state,schoolArr){
    state.Schools = schoolArr;
  },
  set_Error(state,errorOBj){
    state.ErrorObj = errorOBj
  }
}

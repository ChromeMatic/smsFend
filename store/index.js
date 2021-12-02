// State
export const state= () => ({
   Student:{},
   SchoolName:[],
   School:{}
})

//Getters
export const getters={

}

//Actions
export const actions={

  async getSchoolsNames({commit}){
    let schoolName = await this.$axios.get("http://localhost:8080/api/v1/management/schools")
    commit("AddNames",schoolName.data);
    return schoolName.data;
  },


}
//Mutations
export const mutations={
  AddNames(state,schoolName){
    state.SchoolName = schoolName;
  },
  SetSchool(state,school){
    state.School = school;
  }
}

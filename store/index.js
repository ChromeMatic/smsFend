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

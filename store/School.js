/*
*  In this section is responsible for all
*  information related to the School/Schools
*/

//State
export const state=()=>({
  School:{},
  Schools:[]
});

//Getters
export const getters={
  getSchool: state => state.School,
  getAllSchools: state => state.Schools
}

//Actions
export const actions={

  async getSchoolByName({commit},schoolName){
    let schoolObj = await this.$axios.get("http://localhost:8080/api/v1/management/schoolName/"
                    +schoolName);
    commit('setSchool',schoolObj.data);
    return schoolObj.data;
  },

  async getSchoolById({commit},Id){
    let schoolObj = await this.$axios.get("http://localhost:8080/api/v1/management/school/"+
    Id);
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
  }
}

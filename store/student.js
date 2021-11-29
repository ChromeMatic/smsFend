/*
* This is the student store
* that can get all information
* relaying to student.
* */

//State
export const state =()=>({
  student:{}
});

//Mutations
export const mutation={
  async GetStudent(state){
    let res = await this.$axios.get("http://localhost:8080/api/s1/student/"+16);
    state.student = res.data;
  }
}

//Actions
export const actions ={
  storeStudent({commit},studentId){
    commit('GetStudent',studentId)
  }
}

//Getters
export const getters ={
  getStudent(state){
   return state.student;
  }
};

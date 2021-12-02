/*
*  In this section is responsible for all
*  information related to Students
*/

//State
export const state=()=>({
   Student:{},
   Students:[],
});

//Getters
export const getters={
  get_Student: state => state.Student,
  getStudents: state => state.Students
}

//Actions
export const actions={
   async getStudentInfo({commit},Id){
     let studentInfo = await this.$axios.get("http://localhost:8080/api/s1/student/"+Id);
     commit("setStudentInfo",studentInfo.data);
     return studentInfo.data;
   }
}

//Mutations
export const mutations={
   setStudentInfo(state,payload){
     state.Student = payload;
   }
}

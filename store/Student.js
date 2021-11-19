/*
* This is the student store
* that can get all information
* relaying to student.
* */

//State
export const state =()=>({
  student:[]
});

//Getters
export const getters ={

};

//Actions
export const actions={
  async getStudent(){
    let res = await this.$axios.get("http://localhost:8080/api/s1/student/"+16)
    commit("addStudent", res.data);
    return res.data;
  },

  async getStudentCourses(studentId){
    let res = await this.$axios.get("http://localhost:8080/api/s1/courses/"+16)
    return res.data.courses;
  }
};

//Mutations
export const mutations ={
  addStudent(state,student){
    state.student.push({...student})
  }
};


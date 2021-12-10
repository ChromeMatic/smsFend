/*
*  In this section is responsible for all
*  information related to Students
*/

//State
export const state=()=>({
   Student:{},
   Students:[],
   Student_error:{}
});

//Getters
export const getters={
  get_Student: state => state.Student,
  getStudents: state => state.Students,
  getStudent_error: state => state.Student_error
}

//Actions
export const actions={

   async getStudentInfo({commit},Id){

     await this.$axios.get(process.env.StudentURL+"student/"+Id,
         {headers: {'Authorization': 'Bearer ' + localStorage.getItem('Access_Tokens')}}
     ).then( response =>{
       commit("setStudentInfo",response.data);
     })
     .catch(function (error){
       console.log("Error message: ",error.response.data);
       console.log("HTTP status: ",error.response.status);

       let err ={message:"Student does not exist!"}
       commit('setStudentError',err);
     });
   },

  async getSchoolStudents({commit},schoolName){

    await this.$axios.get(process.env.ManagementURl+"schoolStudents/"+schoolName,
      {headers:{'Authorization': 'Bearer ' + localStorage.getItem('Access_Tokens')}})
      .then( response =>{
        commit('set_Students',response.data);
      }).catch(function (error){
        console.log("Error message: ",error.response.data);
        console.log("HTTP status: ",error.response.status);

        let err={message:"School does not exist!"}
        commit('setStudentError',err);
      });
  },

  async edit_Student({commit},student){

     let id =student.Id;
     let studentName = student.studentName;
     let dob = student.DOB;

    await this.$axios.post(process.env.ManagementURl+"EditStudent/"+id,
      {
        "studentName":""+studentName,
        "dob":""+dob
      },
      {headers: {'Authorization':'Bearer '+localStorage.getItem('Access_Tokens')}}
    ).then(
      response => {console.log(response.data)}
    ).catch(function (error){
      console.log("Http status :",error.response.status);
      console.log("Message :",error.response.data);
    })
  },

  async save_student({commit},student){

       let name = student.name;
       let school = student.school;
       let dob = student.dob;

       await this.$axios.post(process.env.ManagementURl+"student/save",
         {
           "studentName":""+name,
           "dob":""+dob
         },
         {
           headers:{'Authorization':'Bearer '+localStorage.getItem('Access_Tokens')}
       }).then( response =>{
          console.log(response.data)
       }).catch(function (error){
          console.log(error.response.data);
          console.log(error.response.status)
       });
      await this.addToSchool(school,name);
  },

  async addToSchool(school,name){
    await this.$axios.post(process.env.ManagementURl+"school/AddStudent/"
      +school+"/"+name, {},
      {headers:{'Authorization':'Bearer '+localStorage.getItem('Access_Tokens')}}
    ).then(response =>{
      console.log(response.data)
    }).catch(function (error){
      console.log(error.response.data);
      console.log(error.response.status)
    });
  }
}

//Mutations
export const mutations={
   setStudentInfo(state,payload){
     state.Student = payload;
   },
   set_Students(state,payload){
     state.Students = payload;
   },
   setStudentError(state,payload){
     state.Student_error = payload;
   }
}

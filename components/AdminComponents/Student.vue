<template>
  <div class="flex flex-col space-y-4 bg-white p-0.5 bg-white">


    <div class="flex flex-col mt-0.5 lg:mt-0 justify-center items-center bg-gray-100 h-96
                lg:h-52 w-full lg:p-4
              space-y-3 p-2">

      <h1 class="leading-3 text-2xl  mt-6 mb-4 font-medium text-gray-600 uppercase">
        View Students
      </h1>

      <div class="flex flex-col lg:flex-row w-full h-48 space-y-3 lg:space-y-0 lg:space-x-3">

        <div class="rounded bg-white shadow h-32 flex-auto p-2">
          <label  class="text-sm uppercase font-medium text-gray-600 block mb-2 dark:text-gray-400">
            Select your Region
          </label>
          <select v-model="region" class="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg
          focus:outline-none focus:border-green-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500 focus:ring-green-500 focus:ring-2">
            <option value="Please select a region">Please select a region</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div v-if="showRegion">
            <h3 class=" text-red-600 mt-2 text-center font-semibold">
              Please select region.
            </h3>
          </div>
        </div>

        <div class="rounded bg-white shadow h-32 flex-auto p-2">
          <label  class="text-sm uppercase font-medium text-gray-600 block mb-2 dark:text-gray-400">
            Get School
          </label>
          <input type="text" class="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg
          focus:outline-none focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white focus:ring-green-400 focus:ring-2 dark:focus:ring-blue-500
          dark:focus:border-blue-500"
          placeholder="Please enter school name, eg. Ardenne high" required
          v-model="school"
          >
          <div v-if="showName">
            <h3 class=" text-red-600 mt-2 text-center font-semibold">
              Please enter school name.
            </h3>
          </div>
        </div>

      </div>

    </div>

    <div class="flex justify-center items-center  h-14 p-2">
      <button @click="ViewSchool" class="block text-white bg-blue-500 hover:bg-blue-600 focus:ring-4
       focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
       dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-96">
        VIEW
      </button>
    </div>

    <div class="flex justify-center items-center mt-4 mb-4">
      <h1 class="text-3xl text-red-400 font-medium uppercase">
        {{getStudent_error.message}}
      </h1>
    </div>

    <div class="flex justify-center items-center">
      <h1 class="text-2xl font-medium text-gray-600 uppercase">Student Table</h1>
    </div>

    <div class="py-2 inline-block min-w-full lg:px-4">
      <div class="overflow-hidden sm:rounded-l shadow-md">
        <table class="min-w-full">
          <thead class="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th scope="col" class="text-sm uppercase font-medium text-gray-600 px-6 py-3 text-left tracking-wider dark:text-gray-400">
              student id
            </th>
            <th scope="col" class="text-sm uppercase font-medium text-gray-600 px-6 py-3 text-left tracking-wider dark:text-gray-400">
              student name
            </th>
            <th scope="col" class="text-sm uppercase font-medium text-gray-600 px-6 py-3 text-left tracking-wider dark:text-gray-400">
              dob
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">view</span>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="student in getStudents":key="student.studentId" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 dark:text-white">
              {{student.studentId}}
            </td>
            <td class="text-sm text-gray-500 font-medium px-6 py-4 whitespace-nowrap dark:text-gray-400">
              {{student.studentName}}
            </td>
            <td class="text-sm text-gray-500 font-medium px-6 py-4 whitespace-nowrap dark:text-gray-400">
              {{student.dob}}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button class="text-blue-600 uppercase hover:text-blue-900 dark:text-blue-500 dark:hover:underline"
               @click="Edit_Student(student.studentName,student.dob,student.studentId)">
                View
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <form class="p-4">
      <div class="mb-4">
        <label class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Name</label>
        <input type="text"  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
        sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required
        v-model="student.studentName">
      </div>
      <div class="mb-6">
        <label class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">DOB</label>
        <input type="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900
        sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required
        v-model="student.DOB">
      </div>
      <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
       focus:ring-blue-300 font-medium rounded-lg text-sm uppercase px-5 py-2.5 text-center dark:bg-blue-600
       dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="SaveChanges"
      >
        Save Changes
      </button>
    </form>

    <div class="flex flex-col space-y-3 p-4">

      <h1 class="text-2xl text-center font-medium text-gray-600 uppercase">
          Create New Student
      </h1>

      <form>
        <div class="mb-6">
          <label class="text-sm uppercase font-medium text-gray-600 block mb-2 dark:text-gray-300">
            student name
          </label>
          <input v-model="newStudent.name" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
          rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500" placeholder="Please enter student name" required>
          <div v-show="showDetail">
            <h1 class="uppercase text-red-600 text-sm font-medium text-center mt-2 mb-2">
              student name is empty.
            </h1>
          </div>
        </div>
        <div class="mb-6">
          <label  class="text-sm font-medium uppercase text-gray-600 block mb-2 dark:text-gray-300">
            student date of birth
          </label>
          <input v-model="newStudent.dob" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
          placeholder="Please enter student date of birth" required>
          <div v-show="showDetail">
            <h1 class="uppercase text-red-600 text-sm font-medium text-center mt-2 mb-2">
              student date of birth is empty.
            </h1>
          </div>
        </div>
        <div class="mb-6">
          <label  class="text-sm font-medium uppercase text-gray-600 block mb-2 dark:text-gray-300">
            select school
          </label>
          <select v-model="newStudent.school" class="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg
          focus:outline-none focus:border-green-500 block w-full p-2.5 dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500 focus:ring-green-500 focus:ring-2" required>
            <option value="Please select a school">Please select a school</option>
            <option v-for="schoolName in this.getAllSchools":key="schoolName.schoolId"
                    >{{schoolName.schoolName}}</option>
          </select>
          <div v-show="showDetail">
            <h1 class="uppercase text-red-600 text-sm font-medium text-center mt-2 mb-2">
              a school was not selected.
            </h1>
          </div>
        </div>
      </form>

      <button class="text-white bg-blue-700 uppercase hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
          font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
          dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="addStudent"
      >
        save student
      </button>
    </div>

  </div>
</template>

<script lang="ts">
import {mapGetters,mapActions} from "vuex";
import Vue from "vue";
export default Vue.extend( {
  name: "Student",
  data:()=>({
    school:"",
    region:"Please select a region",
    student:{
      Id:"",
      studentName:"",
      DOB:""
    },
    newStudent:{
      school:"Please select a school",
      name:"",
      dob:"",
    },
    showName:false,
    showRegion:false,
    displayError:false,
    showDetail:false
  }),
  watch:{...mapGetters('Student',["getStudents"]),},
  computed:{
    ...mapGetters('Student',["getStudents"]),
    ...mapGetters('Student',["getStudent_error"]),
    ...mapGetters('School',['getAllSchools']),
    isEmpty(){
     let result:boolean = Object.keys(this.getStudents).length === 0 ? true : false;
     if(result == false){this.displayError=true;
     }else{this.displayError = false;}
    },

    check(){
      if(this.school === ""){return false;
      }else{return true;}
    },

    checkR(){
      if (this.region === "Please select a region" || this.region === ""){return false;
      }else{return true;}
    },

    checkNewStudent(){
      if (this.newStudent.name === "" ||  this.newStudent.dob === "" || this.newStudent.school === "Please select a school" ){
       return false;
      }
    }
  },
  methods:{
    ...mapActions('Student',['getSchoolStudents','edit_Student','save_student']),
    ...mapActions('School',['getSchools']),
    ViewSchool(){
      if(this.check === false){this.showName=true;}

      if(this.checkR === false){this.showRegion=true;
      }else {this.getSchoolStudents(this.school);}
    },

    Edit_Student(Name:string,DoB:string,ID:string){
      this.student.Id=ID;
      this.student.studentName=Name;
      this.student.DOB=DoB;
    },

    SaveChanges(){this.edit_Student(this.student);},
    addStudent(){
      if(this.checkNewStudent){
        this.showDetail=true
      }else{
        this.showDetail = false;
        this.save_student(this.newStudent);
      }
    }
  },
  created() {this.getSchools();}
});
</script>

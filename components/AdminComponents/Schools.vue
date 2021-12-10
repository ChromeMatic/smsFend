<template>
  <div class="flex flex-col space-y-4 bg-white p-3.5 bg-white">

    <div class="bg-white flex flex-col shadow overflow-hidden sm:rounded-lg">

      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-2xl leading-6 font-medium text-gray-600">
          View School Info
        </h3>
        <p class="mt-3 max-w-3xl text-sm text-gray-500">
          View school information in this this section.
        </p>

        <div class="flex mt-2 space-x-4">

          <label class="block text-gray-700 text-lg font-medium md:text-right mt-1 mb-1 md:mb-0 pr-2.5">
            School name
          </label>

          <input class="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-96 py-1
                 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white
                 focus:border-purple-500"
                 v-model="SchoolName"
                 type="text"
                 placeholder="Please enter school name..." >

          <button @click="getInfo" class="w-64 bg-indigo-400 text-white font-medium
                    rounded h-8">
            View School
          </button>
        </div>

      </div>

      <div class="flex flex-col h-64 bg-gray-50 m-2 rounded shadow p-4 space-y-4">
        <h1>ID #: {{getSchool.schoolId}}</h1>
        <h1>School Name: {{getSchool.schoolName}}</h1>
        <h1>Address: {{getSchool.schoolAddress}}</h1>
        <p>
         School Report: {{getSchool.schoolReport}}
        </p>
        <button @click="editInfo" class=" mt-20 block bg-indigo-400 rounded h-8 text-center text-white font-medium">
          EDIT
        </button>
      </div>



    </div>

    <div class="bg-gray-50 rounded shadow mt-6 p-2 flex flex-col h-80 space-y-4">

      <h1 class="text-gray-600 font-medium text-center text-2xl">
        Edit School
      </h1>

      <div class="bg-white justify-center items-center h-64 p-4 space-y-6 flex flex-col flex-auto rounded shadow">
         <div class="flex lg:space-x-11 space-x-2">
           <h1>Name</h1>
           <input class="bg-gray-50 w-16 appearance-none border-2 border-gray-200 rounded lg:w-96 py-1
                 lg:px-2 px-1.5 text-gray-700 leading-tight focus:outline-none focus:bg-white
                 focus:border-purple-500" v-model="form.name" type="text"
           >
         </div>
        <div class="flex lg:space-x-4 space-x-2">
          <h1>Address</h1>
          <input class="bg-gray-50 w-48 appearance-none border-2 border-gray-200 rounded lg:w-96 py-1
                 lg:px-2 px-1.5 text-gray-700 leading-tight focus:outline-none focus:bg-white
                 focus:border-purple-500" v-model="form.address" type="text"
          >
        </div>
        <div class="flex lg:space-x-4 space-x-2">
          <h1>Report</h1>
          <input class="bg-gray-50 w-48 appearance-none border-2 border-gray-200 rounded lg:w-96 py-1
                 lg:px-2 px-1.5 text-gray-700 leading-tight focus:outline-none focus:bg-white
                 focus:border-purple-500" v-model="form.report" type="text"
          >
        </div>
      </div>

    </div>

    <div class="bg-gray-50 rounded shadow mt-6 p-2 flex flex-col h-80 space-y-4">

      <h1 class="text-gray-600 font-light text-center text-2xl">
        View School Reports
      </h1>

      <div class="bg-white h-64 flex flex-auto rounded shadow">

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapState,mapActions,mapGetters} from  "vuex";
export default Vue.extend( {
  name: "Schools",
  data:()=>({
    SchoolName:"",
    studentList:[],
    form:{
      name:"",
      address:"",
      report:""
    }
  }),
  computed:{
    ...mapState('School',["School"]),
    ...mapGetters('School',['getSchool'])
  },
  methods:{
    ...mapActions('School',["getSchoolByName"]),
    getInfo(){
      this.getSchoolByName(this.SchoolName);
    },
    editInfo(){
      this.form.name = this.School.schoolName;
      this.form.address = this.School.schoolAddress;
    }
  },
  mounted() {
  },
})
</script>

<template>
  <div class="p-2 flex flex-col space-y-2 h-screen flex-auto">
    <!--schoolName schoolAddress students studentName studentId--->

     <div class="p-2 rounded flex flex-col lg:items-center lg:justify-center space-y-3
                 lg:flex-row lg:justify-center lg:h-64 lg:space-x-4 lg:space-y-0 backG">

            <div v-for="i in 3">
              <div class="rounded h-48 w-96 bg-gray-200"></div>
            </div>

     </div>

    <div class="flex flex-1 height items-center justify-center p-4 bg-gray-50 space-x-4">

      <div class="lg:flex-col space-y-4 ">

        <div class="text-center text-3xl font-semibold text-green-500">
          <h1>Students</h1>
        </div>

        <!--
        <div v-for="student in info.students":key="student.studentId">
          <div class="bg-green-400 text-center text-white font-semibold  rounded shadow-xl h-32 w-72 lg:h-16 lg:w-80">
            <h2 class="pt-4">{{student.studentName}}</h2>
            <p>{{info.schoolName}}</p>
          </div>
        </div>
        -->

      </div>



    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TeacherHome",
  data:()=>({
   info:{},
  }),

  computed:{},
  methods:{}
})
</script>

<style scoped>
.backG{background-color: #fafafa;}
.height{height: 28rem;}
</style>

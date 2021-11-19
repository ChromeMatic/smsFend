<template>
 <div class="p-2.5 flex flex-col justify-center space-y-4">

   <div class="text-green-500 space-y-4 lg:space-y-0 lg:flex lg:space-x-2
               lg:justify-between rounded shadow-xl">

     <div class="flex justify-center items-center lg:flex-col lg:w-64 lg:h-72 bg-white rounded-xl">

       <div class="rounded-full h-48 w-48 bg-gray-200 mb-2"></div>

       <div class="flex space-x-2 p-1.5">
         <div class="rounded flex justify-center items-center bg-gray-100 h-12 w-16">
           <h1>ID#: {{Infos.studentId}}</h1>
         </div>
         <div class="rounded flex justify-center items-center bg-gray-100 h-12 w-32">
           <h1>{{Infos.studentName}}</h1>
         </div>
       </div>

     </div>

     <!-- Chart Diagram -->
     <div class="lg:flex lg:flex-col lg:flex-auto p-2 lg:h-72 bg-gray-50 rounded-xl">
       <TrendChart
         :datasets="datasets"
          :grid="grid"
          :labels="labels"
          :min="0"
       />
       <button class="block mt-2 mb-1 p-1.5 bg-gray-200 rounded">
         VIEW ALL GRADES
       </button>
     </div>

     <div class="flex flex-col space-y-2 p-2 lg:p-0 justify-center items-center lg:w-64 lg:h-72
                 bg-white rounded-xl">
          <div v-for="n in 4">
            <div class="rounded flex justify-center items-center bg-gray-200 h-8 w-48"></div>
          </div>
     </div>

   </div>

   <div class="flex space-y-2 items-center lg:justify-evenly lg:space-y-0 lg:flex-auto
               lg:flex-row flex-col height rounded-xl bg-gray-50 shadow-xl">

     <div class="flex flex-col">

       <h1 class="text-4xl text-center mb-4 font-light text-green-500">
          Courses
       </h1>

        <div v-for="course in Infos.courses" :key="course.courseId">
         <div class="flex space-x-3">
           <h1 class="text-xl font-light text-gray-600 ">
             {{course.courseName}}
           </h1>
           <h1 class="text-xl font-light text-gray-600 mb-2">
            {{course.timeAndDate}}
           </h1>
         </div>
        </div>
     </div>

     <div class="flex flex-col">

       <h1 class="text-4xl text-center mb-4 font-light text-green-500">
         Assignments
       </h1>


     </div>

     <div class="flex flex-col">

       <h1 class="text-4xl text-center mb-4 font-light text-green-500">
         Calender
       </h1>


     </div>

   </div>

 </div>
</template>

<script lang="ts">
import {mapState,
        mapGetters,
        mapActions,
        mapMutations
} from 'vuex';
import Vue from "vue";
export default Vue.extend({
  name: "home",
  data:()=>({
    Infos:[],
    datasets:[
      {
        data: [60, 70, 50],
        smooth: true,
        showPoints: true,
        fill: true,
      },
      {
        data: [80, 70, 60],
        smooth: true,
        showPoints: true,
        fill: true,
      },
      {
        data: [90, 66, 75],
        smooth: true,
        showPoints: true,
        fill: true,
      },
    ],
    grid:{
      verticalLines: true,
      horizontalLines: true
    },
    labels:{
      xLabels: ['Test 1', 'Test 2', 'Test 3'],
      yLabels: 6
    }
  }),
   async mounted(){
   let studentId = 16;
   await this.$axios.get("http://localhost:8080/api/s1/student/"+studentId)
     .then(response => (this.Infos = response.data))
  },
  methods:{}
});
</script>

<style scoped>
.backG{background-color: #fafafa;}
.height{height: 26rem;}
</style>

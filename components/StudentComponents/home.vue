<template>
 <div class="p-1.5 flex flex-col justify-center space-y-4">

   <div class="text-green-500 h-full space-y-4 lg:space-y-0 lg:flex lg:space-x-2
               lg:justify-center lg:items-center p-2 bg-gray-50">

     <div class="flex justify-center p-1.5 items-center lg:flex-col lg:w-64 lg:h-80 bg-white
                 rounded-xl shadow">

       <div class="rounded-xl h-48 w-48 bg-gray-200 mb-2"></div>

       <div class="flex space-x-2 p-1.5">
         <div class="rounded flex justify-center text-sm items-center bg-gray-100 h-12 w-16">
           <h1>ID#:{{Infos.studentId}}</h1>
         </div>
         <div class="rounded flex justify-center text-sm items-center bg-gray-100 h-12 w-28">
           <h1>{{Infos.studentName}} </h1>
         </div>
       </div>

     </div>

     <div class="flex flex-grow justify-center h-80 items-center rounded shadow">
       <BarChart
         class="chat"
         :chartData="BarChartData"
         :options="chartOption"
       />
     </div>

     <div class="flex justify-center items-center lg:flex-col lg:w-96 lg:h-80 bg-white
                 shadow rounded">

     </div>

   </div>

   <div class="flex space-y-2 items-center lg:justify-evenly lg:space-y-0 lg:flex-auto
               lg:flex-row flex-col height rounded-xl bg-white shadow">

     <div class="flex flex-col">

       <h1 class="text-4xl text-center mb-4 font-light text-green-500">
          Courses
       </h1>

       <!--   -->
        <div v-for="course in Infos.courses" :key="course.courseId" >
         <div class="flex space-x-3">
           <h1 class="text-sm font-light text-gray-600 ">
             {{course.courseName}}
           </h1>
           <h1 class="text-sm font-light text-gray-600 mb-2">
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
import Vue from "vue";
import BarChart from "~/components/ChartComponents/BarChart.vue";
export default Vue.extend({
  name: "home",
  components: {BarChart},
  data:()=>({
    Infos:{},
    BarChartData:{
      labels:["Jan","Feb","Mar","Apr"],
      datasets:[
        {
          label:"Attendance Record",
          backgroundColor: '#16a085',
          borderColor:"#34495e",
          borderWidth:2,
          fill:false,
          data:[48,50,70,55]
        }
      ]
    },
    chartOption:{
      maintainAspectRatio:true,
      responsive:true
    },
  }),
  async mounted() {
    let Id:number =16;
    await this.$axios.get("http://localhost:8080/api/s1/student/"+Id)
      .then( response => (this.Infos = response.data))
  },
});
</script>

<style scoped>
.backG{background-color: #fafafa;}
.height{height: 26rem;}
.chat{
  width:16rem;
}
</style>

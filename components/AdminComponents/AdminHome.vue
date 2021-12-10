<template>
 <div class="flex flex-col h-screen space-y-10 lg:h-0 lg:flex-auto lg:space-y-3">

   <div class="flex lg:flex-row flex-col h-96 lg:h-80 w-full">

     <div class="rounded flex flex-col mb-4 lg:mb-0 p-2 space-y-2 lg:space-y-4 h-80
               w-72 bg-white items-center justify-center">
       <h1 class="text-gray-600 text-center uppercase font-medium">
         Welcome Back
       </h1>

       <div class="lg:w-56 lg:h-56 w-40 h-40 rounded-xl bg-gray-200"></div>

       <div class="flex  flex-col justify-center items-center h-12 w-full  space-y-2
                   bg-white rounded shadow">
         <h1 class="text-sm text-gray-600 font-medium uppercase">
           Name:{{getUser["username"]}}
         </h1>
         <h1 class="text-sm text-gray-600 font-medium uppercase">
           ID:{{getUser["userId"]}}
         </h1>
       </div>
     </div>


     <div class="rounded lg:space-x-6 space-y-3 h-72 lg:h-80
                 flex lg:flex-row flex-col
                 bg-gray-50 items-center justify-center">

       <!-- -->
       <LineChart
         class="lg:w-96 lg:h-72 w-60 h-60"
         :chartData="chartData"
         :options="chartOption"
       />

       <div class="bg-white p-2 space-y-2 flex flex-col w-64 lg:h-60 lg:w-1/2 rounded shadow">
         <h1 class="text-center lg:mt-4 mt-2 mb-2 lg:mb-4 mt-2 mb-2 text-lg leading-6 font-medium text-gray-600">
           School Attendance across Region 1
         </h1>

         <p class="text-gray-600 text-sm text-center">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam
           culpa dolore eaque, eligendi eos harum inventore molestiae necessitatibus,
           nesciunt quis quos similique.
         </p>

       </div>
     </div>

   </div>

   <div class="flex flex-col boxH p-2 lg:h-96 justify-center space-y-2 lg:space-y-0 items-center
               bg-gray-50">

     <h1 class="text-2xl uppercase leading-3 text-gray-600  font-medium mb-6">
         Statics on Region 1
     </h1>

     <div class="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-3 lg:px-0.5">

       <div class="flex flex-col items-center h-80 w-96 shadow rounded-xl bg-white">
         <BarChart
           class="h-52 w-60 mt-4"
           :chartData="Bar2chartData"
           :options="chartOption"
         />
         <div class="p-4">
           <p class="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur
             corporis dignissimos doloremque.</p>
         </div>
       </div>

       <div class="flex flex-col items-center h-80 w-96 shadow rounded-xl bg-white">
         <PieChart
           class="h-52 w-60 mt-4"
           :chartData="PieChartData"
           :options="chartOption"
         />
         <div class="p-4">
           <p class="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur
             corporis dignissimos doloremque.</p>
         </div>
       </div>

       <div class="flex flex-col items-center h-80 w-96 shadow rounded-xl bg-white">
         <BarChart
           class="h-52 w-60 mt-4"
           :chartData="BarChartData"
           :options="chartOption"
         />
         <div class="p-4">
           <p class="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur
             corporis dignissimos doloremque.</p>
         </div>
       </div>

     </div>

   </div>

 </div>
</template>

<script lang="ts">
import Vue from "vue";
import LineChart from "~/components/ChartComponents/LineChart.vue";
import BarChart from "~/components/ChartComponents/BarChart.vue";
import PieChart from "~/components/ChartComponents/PieChart.vue";
import {mapGetters,mapActions} from "vuex";
export default Vue.extend( {
  name: "AdminHome",
  components: {PieChart, BarChart, LineChart},
  data:()=>({
    chartData:{
      labels:["Jan","Feb","Mar","Apr"],
      datasets:[
        {
          label:"Numbers",
          backgroundColor: '#f87979',
          borderColor:"#8e9eab",
          borderWidth:4,
          fill:false,
          data:[200,300,150,250]
        }
      ]
    },
    chartOption:{
      maintainAspectRatio:false,
      responsive:true
    },
    PieChartData:{
      labels:["Grade 7","Grade 8","Grade 9","Grade 10","Grade 11"],
      datasets:[
        {
          label:"Average Grades across school",
          backgroundColor:["#1abc9c", "#2ecc71", "#2980b9","#e67e22","#d35400"],
          fill:false,
          data:[72,60,68,46,66]
        }
      ]
    },
    BarChartData:{
      labels:["Jan","Feb","Mar","Apr"],
      datasets:[
        {
          label:"Teacher Attendance",
          backgroundColor: '#3498db',
          borderColor:"#1abc9c",
          borderWidth:1,
          fill:false,
          data:[200,300,150,250]
        }
      ]
    },
    Bar2chartData:{
      labels:["Jan","Feb","Mar","Apr"],
      datasets:[
        {
          label:"Student Attendance",
          backgroundColor: '#27ae60',
          borderColor:"#2ecc71",
          borderWidth:1,
          fill:false,
          data:[200,300,150,250]
        }
      ]
    }
  }),
  computed:{
   ...mapGetters('user',["getUser"]),
  },
  methods:{
   ...mapActions('user',['getUserById']),
  },
  mounted(){
   let Id:number =141;
   this.getUserById(Id);
  },
})
</script>

<style scoped>
.boxH{height:108rem;}
</style>

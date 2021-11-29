<template>
 <div class="flex flex-col flex-auto space-y-4">

   <div class="flex flex-col lg:flex-row backG rounded-xl lg:h-96 h-1/2
               lg:space-x-2 lg:space-y-0 space-y-6 lg:p-3 p-1.5
               items-center justify-between">

   <div class="rounded flex flex-col mb-4 lg:mb-0 p-2 space-y-2 lg:space-y-4 h-80 w-72 bg-gray-100
                 items-center
                 justify-center">
        <h1 class="text-green-500 text-center font-semibold">
          Welcome Back
        </h1>

       <div class="lg:w-56 lg:h-56 w-40 h-40 rounded-xl bg-gray-200"></div>

       <div class="flex  flex-col justify-center items-center h-12 w-full  space-y-2 bg-white rounded shadow-xl">
          <h1 class="text-sm text-gray-600 ">
            Name: Armani Brown
          </h1>
           <h1 class="text-sm text-gray-600">
             ID: 17563224
           </h1>
       </div>
     </div>


     <div class="rounded lg:space-x-6 space-y-4 h-72 lg:h-80
                 flex flex-col lg:flex-row flex-auto
                 bg-gray-100 items-center justify-center">
       <LineChart
         class="lg:w-72 w-48 mt-44 lg:mt-0"
         :chartData="chartData"
         :options="chartOption"
       />

       <div class="bg-white p-2 space-y-2 flex flex-col w-64 lg:h-60 lg:w-1/2 rounded shadow-xl">
            <h1 class="text-center lg:mt-4 mt-2 mb-2 lg:mb-4 mt-2 mb-2 text-xl text-gray-600 font-semibold">
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

   <div class="flex lg:flex-row flex-col
               space-y-2 lg:space-y-0
               lg:space-x-3 backG rounded-xl h-96
               justify-center items-center">

     <div class="items-center justify-center flex flex-col
                 lg:h-72 lg:w-96 h-60 w-56 bg-white
                 rounded shadow-xl">
       <BarChart
         class="lg:w-64 w-52"
         :chartData="chartData"
         :options="chartOption"
       />
     </div>

     <div class="items-center justify-center flex flex-col h-72 w-96 bg-white
                 rounded shadow-xl">
       <PieChart
         class="w-64"
         :chartData="PieChartData"
         :options="chartOption"
       />
     </div>

     <div class="items-center justify-center flex flex-col h-72 w-96 bg-white
                 rounded shadow-xl">
       <BarChart
         class="w-64"
         :chartData="BarChartData"
         :options="chartOption"
       />
     </div>

   </div>

  <div class="flex space-x-3 backG rounded-xl h-full
              justify-center items-center">
    <div v-for="i in 3">
      <div  class="items-center justify-center flex flex-col h-64 w-96 bg-white rounded shadow-xl">
        {{i}}
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
export default Vue.extend( {
  name: "AdminHome",
  components: {PieChart, BarChart, LineChart},
  data:()=>({
    Name:'',
    SchoolsInfos:[],
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
      maintainAspectRatio:true,
      responsive:true
    },
    PieChartData:{
      labels:["Jan","Feb","Mar","Apr"],
      datasets:[
        {
          label:"Numbers",
          backgroundColor:["#41B883", "#E46651", "#00D8FF","#aaff00"],
          borderColor:"#8e9eab",
          borderWidth:1,
          fill:false,
          data:[200,300,150,250]
        }
      ]
    },
    BarChartData:{
      labels:["Jan","Feb","Mar","Apr"],
      datasets:[
        {
          label:"Numbers",
          backgroundColor: '#24ffaf',
          borderColor:"#0abaff",
          borderWidth:2,
          fill:false,
          data:[200,300,150,250]
        }
      ]
    }
  }),
  methods:{
    async GetSchool(){
      await this.$axios.get("http://localhost:8080/api/v1/management/schoolName/"+this.Name)
        .then( response => (this.SchoolsInfos = response.data));
    }
  }
})
</script>

<style scoped>
.backG{
  background-color: #fafafa;
}

</style>

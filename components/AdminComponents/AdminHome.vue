<template>
 <div class="flex flex-col flex-auto space-y-2">

   <div class="flex flex-col lg:flex-row backG lg:h-96 h-1/2
               lg:space-x-2 lg:space-y-0 space-y-6 lg:p-3 p-1.5
               items-center justify-between">

   <div class="rounded flex flex-col mb-4 lg:mb-0 p-2 space-y-2 lg:space-y-4 h-80
               w-72 bg-white items-center justify-center">
        <h1 class="text-green-500 text-center font-semibold">
          Welcome Back
        </h1>

       <div class="lg:w-56 lg:h-56 w-40 h-40 rounded-xl bg-gray-200"></div>

       <div class="flex  flex-col justify-center items-center h-12 w-full  space-y-2
                   bg-white rounded shadow">
          <h1 class="text-sm text-gray-600 ">
            Name: {{user.username}}
          </h1>
           <h1 class="text-sm text-gray-600">
             ID: {{user.userId}}
           </h1>
       </div>
     </div>


     <div class="rounded lg:space-x-6 space-y-4 h-72 lg:h-80
                 flex flex-col lg:flex-row flex-auto
                 bg-gray-50 items-center justify-center">
       <LineChart
         class="lg:w-72 w-48 mt-44 lg:mt-0"
         :chartData="chartData"
         :options="chartOption"
       />

       <div class="bg-white p-2 space-y-2 flex flex-col w-64 lg:h-60 lg:w-1/2 rounded shadow">
            <h1 class="text-center lg:mt-4 mt-2 mb-2 lg:mb-4 mt-2 mb-2 text-xl text-gray-600
            font-semibold">
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

   <div class="flex space-x-2 bg-white p-2 h-96
              justify-center items-center  ">

     <div class="flex flex-col space-y-4 h-80 items-center bg-white justify-center
                w-96 shadow rounded">
       <h1 class="text-center text-gray-600 mb-4 font-semibold text-xl">
         Find School
       </h1>
       <div class="flex flex-col space-y-2">


         <div class="mb-4 md:w-full">
           <label class="block text-sm font-light text-gray-800 mb-1">School Name</label>
           <input v-model="Name" class="w-72 border rounded p-2 outline-none focus:shadow-outline"
                  type="text" placeholder="Please enter school name.">
         </div>

       </div>
       <button @click="GetSchool" class="rounded h-10  text-white w-72 font-semibold bg-green-500 shadow block">
         VIEW
       </button>
     </div>

     <div class="flex justify-center items-center flex-col h-80
                flex-auto bg-white shadow rounded space-y-2">

       <h1>
         School Name: {{SchoolsInfos.schoolName}}
       </h1>

       <h1>
         School Address: {{SchoolsInfos.schoolAddress}}
       </h1>

       <h1>
         School Report: {{SchoolsInfos.schoolReport}}
       </h1>


     </div>

   </div>

   <div class="flex flex-col
               space-y-2 lg:space-y-6
               lg:space-y-y bg-gray-50 h-full
               justify-center items-center mb-2">

     <h1 class="text-gray-600 font-light text-3xl">
       {{SchoolsInfos.schoolName}} Statics
     </h1>

     <div class="flex space-x-2">
       <div class="items-center p-3 justify-center flex flex-col
                  h-96 w-96 bg-white
                 rounded-xl shadow">
         <BarChart
           class="lg:w-64 w-52"
           :chartData="Bar2chartData"
           :options="chartOption"
         />
         <div class="p-4">
           <p class="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur
             corporis dignissimos doloremque.</p>
         </div>
       </div>

       <div class="items-center justify-center flex flex-col h-96 w-96 bg-white
                 rounded-xl shadow space-y-2">
         <PieChart
           class="w-64"
           :chartData="PieChartData"
           :options="chartOption"
         />

         <div class="p-4">
          <p class="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur
            corporis dignissimos doloremque.</p>
         </div>

       </div>

       <div class="items-center justify-center flex flex-col h-96 w-96 bg-white
                 rounded-xl shadow space-y-2">
         <BarChart
           class="w-64"
           :chartData="BarChartData"
           :options="chartOption"
         />

         <div class="p-4">
           <p class="text-sm text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur
             corporis dignissimos doloremque.</p>
         </div>
       </div>
     </div>

     <button class="rounded h-10  text-white w-72 font-semibold bg-green-500 shadow block">
       Generate Report
     </button>

   </div>
   <br>

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
    Region:'',
    Name:'',
    SchoolsInfos:[],
    user:{},
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
  async mounted() {
    await this.$axios.get("http://localhost:8080/api/v1/management/user/16")
    .then(response => (this.user = response.data));
  },
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
.boxH{
  height: 24rem;
}
</style>

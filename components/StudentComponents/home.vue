<template>
 <div class="m-2 p-3 flex flex-col justify-center space-y-4">

   <div class="text-green-500 space-y-4 lg:space-y-0 lg:flex lg:space-x-2 lg:justify-between">
     <div class="animate-pulse flex justify-center lg:items-center lg:w-64 lg:h-64 bg-gray-100 rounded-xl shadow-xl">
          <div class="w-32 h-32 lg:w-48 lg:h-48 bg-gray-300 rounded-full"></div>
     </div>
     <div class="animate-pulse lg:flex lg:flex-auto p-2 lg:h-64 bg-gray-100 rounded-xl shadow-xl">
       <line-chart height="40" :data="lineData" />
     </div>

     <div class="animate-pulse flex flex-col space-y-2 p-2 lg:p-0 justify-center items-center lg:w-64 lg:h-64 bg-gray-100 rounded-xl shadow-xl">
        <div v-for="n in 4">
          <div class="rounded bg-gray-200 h-8 w-48"></div>
        </div>
     </div>

   </div>

   <div class="animate-pulse flex space-y-2 items-center lg:justify-evenly lg:space-y-0 lg:flex-auto lg:flex-row flex-col height
        rounded-xl bg-gray-100 shadow-xl">

     <div class="flex flex-row ">
       <div class="flex justify-center ml-2 mr-2 lg:ml-4 lg:mr-4 flex-col lg:space-y-2 space-y-1">
         <div v-for="n in 3">
           <div class="rounded bg-gray-300 lg:h-24 h-16 lg:w-24 w-16"></div>
         </div>
       </div>

       <div class="flex flex-col flex-auto lg:space-y-4 space-y-2  justify-center">
         <div v-for="n in 8">
           <div class="rounded bg-gray-300 h-4 lg:h-6 w-64 lg:w-96"></div>
         </div>
       </div>
     </div>

     <div class="flex flex-row ">
       <div class="flex justify-center ml-2 mr-2 lg:ml-4 lg:mr-4 flex-col lg:space-y-2 space-y-1">
         <div v-for="n in 3">
           <div class="rounded bg-gray-300 lg:h-24 h-16 lg:w-24 w-16"></div>
         </div>
       </div>

       <div class="flex flex-col flex-auto lg:space-y-4 space-y-2  justify-center">
         {{Infos[0]}}
       </div>
     </div>

   </div>

 </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "home",
  data:()=>({
    lineData:{
        Test_1:10,
        Test_2:12,
        Test_3:5,
        Test_4:2,
        Test_5:12,
      },
    Infos:{},
    size:0
  }),
 async mounted() {
    let id:number = 63
    let x = await this.$axios.get('http://localhost:8080/api/v1/users/',{
      params:{id}
    }).then(response => (this.Infos = response.data));
    this.size = x.length;
  },
  computed:{},
  methods:{}
});
</script>

<style scoped>
.backG{background-color: #fafafa;}
.height{height: 27rem;}
</style>

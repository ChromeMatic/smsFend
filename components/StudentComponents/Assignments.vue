<template>
 <div class="flex lg:flex-col lg:p-2 space-y-6">

   <div class="flex flex-col  items-center shadow-xl p-1 rounded
               lg:space-x-3 space-y-4 lg:space-y-0 w-full">

     <div class="flex space-x-3 mt-4">
       <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
       </span>
       <h1 class="text-gray-600 font-light text-5xl mb-4">
         Assignments
       </h1>
       <span class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
       </span>
     </div>

     <div class="flex flex-row space-x-4 ">
       <div v-for="n in 3">
         <div class="mt-4 lg:mt-0 h-40 w-96 lg:h-72
              lg:w-96 bg-gray-100 rounded ">

         </div>
       </div>
     </div>

   </div>

 </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Assignments",
  data:()=>({}),
  computed:{},
  methods:{}
});
</script>

<style scoped>

</style>

<template>
 <div class="pl-4 pt-2 pr-4 flex flex-col">


   <div class="flex mt-2 mb-4 space-x-3 justify-between">

     <div class=" flex justify-center items-center space-x-3 h-64 w-1/3 rounded-xl backG">

        <div class="flex flex-col space-y-4 animate-pulse">
          <div class="h-16 w-16 bg-gray-200 rounded-xl"></div>
          <div class="h-16 w-16 bg-gray-200 rounded-full"></div>
        </div>

       <div class="flex flex-col space-y-4 animate-pulse">
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-72 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-1/2 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-72 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-1/2 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
       </div>

     </div>

     <div class="flex h-64 w-1/3 rounded-xl space-x-2 backG">

       <div class="flex flex-col space-y-4 animate-pulse">
         <div class="h-64 w-32 bg-gray-200 rounded-xl"></div>
       </div>

       <div class="flex flex-col justify-center items-center space-y-4 animate-pulse">
         <div class="h-4 w-32 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-1/2 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-1/4 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-1/2 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
       </div>

     </div>

     <div class=" flex justify-center items-center space-x-3 h-64 w-1/3 rounded-xl backG">

       <div class="flex flex-col space-y-4 animate-pulse">
         <div class="h-16 w-16 bg-gray-200 rounded-xl"></div>
         <div class="h-16 w-16 bg-gray-200 rounded-xl"></div>
       </div>

       <div class="flex flex-col space-y-4 animate-pulse">
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-72 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-1/2 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-72 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-1/2 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
       </div>

     </div>

   </div>

   <div class="flex space-x-3">

     <div class="flex  h-96 w-1/2 rounded-xl backG space-x-3">

       <div class="h-64 w-64 mt-14 bg-gray-200 rounded-full animate-pulse"></div>

       <div class="flex flex-col justify-center space-y-4 animate-pulse">
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-72 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-1/2 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
       </div>

     </div>

     <div class=" flex justify-center h-96 w-1/2 rounded-xl backG">


       <div class="flex flex-col ml-2 justify-center space-y-2 animate-pulse">
         <div class="h-16 w-72 bg-gray-200 rounded-xl"></div>
         <div class="h-16 w-72 bg-gray-200 rounded-xl"></div>
         <div class="h-16 w-72 bg-gray-200 rounded-xl"></div>
         <div class="h-16 w-72 bg-gray-200 rounded-xl"></div>
       </div>

       <div class="flex flex-col ml-2 justify-center space-y-4 animate-pulse">
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-72 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-1/2 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-72 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-1/2 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
         <div class="h-4 w-64 bg-gray-200 rounded-xl"></div>
       </div>


     </div>

   </div>


 </div>
</template>

<script>
export default {
  name: "home",
  data:()=>({}),
  computed:{},
  methods:{}
}
</script>

<style scoped>
.backG{
  background-color: #fafafa;
}
</style>
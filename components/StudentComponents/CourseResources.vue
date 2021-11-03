<template>
  <div class="pl-4 pt-3 pr-4 flex flex-col">

    <div class="flex justify-between space-x-4 mb-2">

      <div class="BG justify-center flex rounded-xl h-64 w-72 animate-pulse">
         <div class="rounded-full w-64 h-64 bg-gray-200"></div>
      </div>

      <div class="BG p-2 mt-2 ml-2 rounded-xl flex h-64 w-1/2">

          <div class="flex flex-col mr-3 animate-pulse space-y-4">
            <div v-for="n in 4">
             <div class="bg-gray-200 rounded-xl w-12 h-12"></div>
            </div>
          </div>

          <div class="flex flex-col animate-pulse space-y-4 mr-6">
            <div v-for="n in 8">
              <div class="bg-gray-200 rounded-xl w-72 h-4"></div>
            </div>
          </div>

        <div class="flex flex-col mr-3 animate-pulse space-y-4">
          <div v-for="n in 4">
            <div class="bg-gray-200 rounded-xl w-48 h-12"></div>
          </div>
        </div>

      </div>

      <div class="BG rounded-xl h-64 w-72 justify-center flex animate-pulse">

      </div>

    </div>

    <div class="flex w-full h-96 BG">

     <div class="flex p-2 flex-col justify-center animate-pulse item-center mt-6 ml-6 space-y-3">

       <div v-for="n in 5">
         <div class="bg-gray-200 rounded-xl w-12 h-12"></div>
       </div>

     </div>

     <div class="flex p-2 flex-col justify-center animate-pulse item-center mt-6 ml-6 space-y-12">

        <div v-for="n in 5">
          <div class="bg-gray-200 rounded-xl w-72 h-4"></div>
        </div>

      </div>

     <div class="flex p-2 flex-col justify-center animate-pulse item-center mt-6 ml-6 space-y-3">

       <div v-for="n in 5">
         <div class="bg-gray-200 rounded-xl w-12 h-12"></div>
       </div>

      </div>

     <div class="flex p-2 flex-col justify-center animate-pulse item-center mt-6 ml-6 space-y-12">

        <div v-for="n in 5">
          <div class="bg-gray-200 rounded-xl w-72 h-4"></div>
        </div>
     </div>

     <div class="flex p-2 flex-col justify-center animate-pulse item-center mt-6 ml-6 space-y-3">

       <div v-for="n in 5">
         <div class="bg-gray-200 rounded-xl w-12 h-12"></div>
       </div>

     </div>

     <div class="flex p-2 flex-col justify-center animate-pulse item-center mt-6 ml-6 space-y-12">

       <div v-for="n in 5">
         <div class="bg-gray-200 rounded-xl w-72 h-4"></div>
       </div>

      </div>


    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend( {
  name: "CourseResources",
  data:()=>({}),
  computed:{},
  methods:{}
})
</script>

<style scoped>
.BG{
  background-color: #fafafa;
}
</style>

<template>
 <div class="flex flex-col flex-auto m-2 space-y-2">

   <div class="flex backG rounded-xl h-64 space-x-2 p-3 items-center justify-between">

     <button class="rounded h-48 w-48 bg-gray-200 animate-pulse"></button>
     <button class="rounded h-48 flex flex-auto animate-pulse bg-gray-200"></button>
     <button class="rounded h-48 w-48 bg-gray-200 animate-pulse"></button>

   </div>

   <div class="flex backG rounded-xl h-full">

   </div>

 </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend( {
  name: "AdminHome",
})
</script>

<style scoped>
.backG{
  background-color: #fafafa;
}
</style>

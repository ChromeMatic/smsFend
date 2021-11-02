<template>
  <div class="flex flex-col flex-auto p-1.5 ml-2 mr-2">

    <div class="backG flex justify-between pt-2 pb-2 pl-6 pr-6 items-center rounded h-64 mb-2">

      <div class="h-48 w-64 rounded-xl bg-gray-200 animate-pulse"></div>
      <div class="h-48 flex flex-auto ml-2 mr-2 rounded-xl bg-gray-200 animate-pulse"></div>
      <div class="h-48 w-64 rounded-xl bg-gray-200 animate-pulse"></div>
      
    </div>

    <div class="backG flex rounded h-96 p-4">

      <div class="flex flex-auto rounded-xl h-full bg-gray-200 animate-pulse"></div>

    </div>

  </div>
</template>

<script>
export default {
  name: "TimeTable",
  data(){
    return{}
  }
}
</script>

<style scoped>
.backG{
  background-color: #fafafa;
}
</style>
<template>
 <div class="m-2 flex flex-col justify-center">

   <div class="lg:flex lg:flex lg:flex-col lg:space-y-6 flex">
     <div v-for="n in 4">
       <div class="flex w-16 h-16 bg-gray-300 rounded"></div>
     </div>
   </div>

 </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "home",
  data:()=>({}),
  computed:{},
  methods:{}
});
</script>

<style scoped>
.backG{
  background-color: #fafafa;
}
</style>

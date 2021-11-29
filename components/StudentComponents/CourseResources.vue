<template>
  <div class="mt-1 p-2 flex flex-col justify-center space-y-4">

    <div class="flex h-64 flex-col items-center space-y-2 lg:space-y-0 lg:flex-row
                lg:space-x-1 lg:justify-between text-green-500
                rounded shadow-xl p-1">

      <div class="h-60 w-44 bg-gray-200 rounded"></div>
      <div class="h-60 flex-grow bg-gray-200 rounded"></div>
      <div class="h-60 w-44 bg-gray-200 rounded"></div>

    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend( {
  name: "CourseResources",
  data:()=>({
    student:[]
  }),
  async mounted() {
    let studentId:number = 16;
    await this.$axios.get("http://localhost:8080/api/s1/student/"+studentId)
    .then(response => (this.student = response.data))
  },
  computed:{},
  methods:{}
})
</script>

<style scoped>
.BG{
  background-color: #fafafa;
}
</style>

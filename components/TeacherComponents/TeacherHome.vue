<template>
  <div class="flex space-x-8">
    {{info}}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TeacherHome",
  data:()=>({
   info:{}
  }),
  async mounted() {
    let name:string ='Daniel Brown';
    let res = await this.$axios.get("http://localhost:8080/api/v1/teacher/getStudent/"+name)
    .then( response => (this.info = response.data))
    console.log(res);
  },
  computed:{},
  methods:{}
})
</script>

<style scoped>

</style>

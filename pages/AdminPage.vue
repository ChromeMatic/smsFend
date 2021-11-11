<template>
  <div class="flex h-screen flex-auto ">

    <div class="flex flex-col p-3 w-1/6 justify-between items-center backG">

      <!-- Logo -->
      <div class="mt-2 rounded h-16 w-16 bg-gray-200">

      </div>
      <!-- Logo -->

      <div class="flex flex-col space-y-2">
        <div v-for="n in 6">
          <button class="rounded h-8 w-48 bg-gray-200"></button>
        </div>
      </div>

      <div class="flex flex-col space-y-2">
        <div v-for="n in 2">
          <button class="rounded h-8 w-48 bg-gray-200"></button>
        </div>
      </div>


    </div>

    <div class="flex flex-col flex-auto">

      <AdminHome/>

    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AdminHome from "~/components/AdminComponents/AdminHome.vue";
export default Vue.extend({
  name: "AdminPage",
  head:{
    title:'Admin Dashboard',
    meta:[
      {
        hid:'adminDashboard',
        name:'Admin Dashboard',
        content:'Contains Admin resource and Settings'
      }
    ]
  },
  components:{AdminHome},
  data:()=>({}),
  computed:{},
  methods:{}
})
</script>

<style scoped>
.backG{
  background-color: #fafafa;
}
</style>

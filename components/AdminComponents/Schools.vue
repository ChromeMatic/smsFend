<template>
  <div class="flex flex-col space-y-4 bg-white p-3.5 bg-white">

    <div class="bg-white shadow overflow-hidden sm:rounded-lg">

      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-600">
          View School Info
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          View school information in this this section.
        </p>
      </div>

      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Select a School from drop down options
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">

          </dd>
        </div>
      </dl>



    </div>

    <div class="bg-gray-50 rounded shadow mt-6 p-2 flex flex-col h-80 space-y-4">

      <h1 class="text-gray-600 font-medium text-center text-2xl">
        Edit School
      </h1>

      <div class="bg-white h-64 flex flex-auto rounded shadow">

      </div>

    </div>

    <div class="bg-gray-50 rounded shadow mt-6 p-2 flex flex-col h-80 space-y-4">

      <h1 class="text-gray-600 font-light text-center text-2xl">
        View School Reports
      </h1>

      <div class="bg-white h-64 flex flex-auto rounded shadow">

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapState,mapActions} from  "vuex";
export default Vue.extend( {
  name: "Schools",
  data:()=>({}),
  computed:{
  },
  methods:{
  },
  mounted() {
  },
})
</script>

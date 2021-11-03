<template>
  <div class="flex flex-col mt-2 ml-2 mr-2 p-2">

    <div class="flex">

      <div class="h-96 w-64 mr-2 backG rounded-xl">

      </div>

      <div class="h-96 flex flex-auto backG rounded-xl">

      </div>

    </div>

    <div class="mt-2 flex h-64 backG rounded-xl">

    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend( {
  name: "StudentSettings",
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

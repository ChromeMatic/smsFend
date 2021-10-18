<template>
  <LoginPage/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import LoginPage from "@/Pages/LoginPage";
export default defineComponent( {
  name: "LandingPage",
  components:{LoginPage}
})
</script>
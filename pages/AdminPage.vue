<template>
  <div class="relative min-h-screen md:flex">

    <!-- mobile Menu -->
    <div class="backG font-DM md:hidden sticky top-0 z-20 shadow-xl">

      <div class="text-green-500 flex justify-between transition duration-200">
        <button class="p-4  block flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          <span class="">
          E-Learning
        </span>
        </button>

        <button @click="show=!show" class="p-4 focus:outline-none focus:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div v-show="show" class=" flex flex-col text-green-500 justify-center items-center">

        <div v-for="button in Buttons" :key="button.Name" >
          <button @click="activeComponent= button.btn" class="block flex justify-center focus:outline-none items-center rounded py-2.5 px-12 min-w-full">
            <span>{{button.Name}}</span>
          </button>
        </div>

      </div>

    </div>

    <aside class="flex hidden lg:flex h-screen sticky top-0">

    <!-- SideNav -->
    <div class=" font-DM
      shadow-xl rounded
      backG flex flex-col
      text-green-500 w-64 px-4
      py-2 justify-between absolute
      inset-y-0 left-0 transform
      -translate-x-full transition
      duration-200 ease-in-out
      md:relative md:translate-x-0">

      <a href="#" class="ml-10 bg-white shadow-2xl py-2 rounded-xl mt-1 flex items-center justify-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
        <span class="">
            E-Learning
          </span>
      </a>

      <div class="space-y-2 flex flex-col">
        <button @click="activeComponent='AdminHome'" class="block flex justify-center items-center space-x-2 rounded py-2.5 px-6 min-w-full hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Dashboard</span>
        </button>
        <button @click="activeComponent='Schools'" class="block flex justify-center items-center space-x-8 rounded py-2.5 px-6 min-w-full hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          <span class="text-center">Schools</span>
        </button>
      </div>

      <div class="space-y-2 flex flex-col">
        <button class="block flex justify-center items-center space-x-2 rounded py-2.5 py-6 hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Log-out</span>
        </button>
        <button @click="activeComponent='StudentSettings'" class="block flex justify-center items-center space-x-2 rounded py-2.5 py-6 hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          <span>Settings</span>
        </button>
      </div>

    </div>

    </aside>

    <!-- Content Container -->
    <main class="flex flex-col flex-1 font-DM">
      <!-- Display Content -->
      <transition name="fade">
        <component :is="activeComponent"/>
      </transition>
      <!-- Display Content -->
    </main>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AdminHome from "~/components/AdminComponents/AdminHome.vue";
import Schools from "~/components/AdminComponents/Schools.vue";
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
  components:{AdminHome,Schools},
  data:()=>({
    activeComponent:'AdminHome',
    Buttons:[
      {Name:'Home',btn:'AdminHome'},
      {Name:'School',btn:'Schools'}
    ],
    show:false,
  }),
  computed:{},
  methods:{}
})
</script>

<style scoped>
.backG{background-color: #fafafa;}
.fade-enter-active,.fade-leave-active{
  transition: opacity .4s ease-in-out;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
</style>

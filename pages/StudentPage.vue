<template>
  <div class="flex h-screen">

    <div class="flex flex-col pa-2 w-1/6 justify-between items-center backG">


      <div class="flex flex-col space-y-8">

        <!-- logo -->
        <div class="flex space-x-1 mt-4 justify-center items-center rounded-xl bg-white p-2 shadow-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-500 " viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          <h3 class="text-gray-500 text-xl font-normal subpixel-antialiased">
            E-learning
          </h3>
        </div>
        <!-- logo -->

        <button @click="activeComponent='home'" class="p-2 flex justify-center items-center rounded-xl hover:bg-gray-200 transition ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
          <h1 class="text-green-500 text-lg font-base subpixel-antialiased">
            Dashboard
          </h1>
        </button>

        <button class="flex justify-center items-center
           p-2 rounded-xl hover:bg-gray-200 transition ease-in-out"
           @click="activeComponent='CourseResources'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <span class="text-gray-600 text-lg font-base subpixel-antialiased text-green-500">
           Resources
        </span>
        </button>

        <button @click="activeComponent='TimeTable'" class="flex justify-center text-green-500 items-center p-2 rounded-xl hover:bg-gray-200 transition ease-in-out" >
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="text-green-500 text-lg font-base subpixel-antialiased">
          Timetable
        </span>
        </button>

        <button @click="activeComponent='Assignments'" class="flex justify-center text-green-500 items-center p-2 rounded-xl hover:bg-gray-200 transition ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span class="text-green-500 text-lg font-base subpixel-antialiased">
          Assignment
        </span>
        </button>

        <button @click="activeComponent='LiveSessions'" class="flex justify-center text-green-500 items-center p-2 rounded-xl hover:bg-gray-200 transition ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-green-500 text-lg font-base subpixel-antialiased">
             Live-Classes
          </span>
        </button>

      </div>

      <div class="flex mb-8">

        <button @click="activeComponent='StudentSettings'" class="flex justify-center items-center p-2 rounded-xl hover:bg-gray-200 transition ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="text-green-600 text-lg font-base subpixel-antialiased">
          Settings
        </span>
        </button>

      </div>

    </div>

    <div class="flex flex-col flex-auto ">

      <navbar/>

      <!-- Display Content -->
       <transition name="fade">
         <component :is="activeComponent"/>
       </transition>
      <!-- Display Content -->

    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import home from '../components/StudentComponents/home.vue';
import Assignment from '../components/StudentComponents/Assignments.vue';
import Navbar from '../components/StudentComponents/Navbar.vue';
import CourseResources from '../components/StudentComponents/CourseResources.vue';
import LiveSessions from '../components/StudentComponents/LiveSessions.vue';
import TimeTable from '../components/StudentComponents/TimeTable.vue';
import StudentSettings from '../components/StudentComponents/StudentSettings.vue';

export default Vue.extend({
  components:{
    Navbar,home,Assignment,CourseResources,LiveSessions,
    TimeTable,StudentSettings
  },
  data:()=>({
    activeComponent:'home'
  }),
  computed:{},
  methods:{}
})
</script>

<style scoped>
.backG{
  background-color: #fafafa;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .3s ease;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
</style>

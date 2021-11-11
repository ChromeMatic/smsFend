<template>
  <div class="relative min-h-screen md:flex">

    <!-- mobile Menu -->
    <div class="backG">

      <div class="md:hidden text-green-500 flex justify-between transition duration-200">
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

      <div v-show="show" class=" flex flex-col text-green-500 justify-center items-center transition
      duration-200 ease-in-out">

        <div v-for="button in Buttons" :key="button.Name" >
          <button @click="activeComponent= button.btn" class="block flex justify-center items-center rounded py-2.5 px-6 min-w-full hover:bg-gray-200">
            <span>{{button.Name}}</span>
          </button>
        </div>

      </div>

    </div>

    <!-- SideNav -->
    <div class="
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
          <button @click="activeComponent='home'" class="block flex justify-center items-center space-x-2 rounded py-2.5 px-6 min-w-full hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
           <span>Dashboard</span>
          </button>
          <button @click="activeComponent='Assignment'" class="block flex justify-center items-center space-x-2 rounded py-2.5 px-6 min-w-full hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
           <span>Assignment</span>
          </button>
          <button @click="activeComponent='CourseResources'" class="block flex justify-center items-center space-x-2 rounded py-2.5 px-6 min-w-full hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span>Resources</span>
          </button>
          <button @click="activeComponent='LiveSessions'" class="block flex justify-center items-center space-x-2 rounded py-2.5 px-6 min-w-full hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Sessions</span>
          </button>
          <button @click="activeComponent='TimeTable'" class="block flex justify-center items-center space-x-2 rounded py-2.5 px-6 min-w-full hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
           <span>TimeTable</span>
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

    <!-- Content Container -->
    <div class="flex flex-col flex-1">

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
import CourseResources from '../components/StudentComponents/CourseResources.vue';
import LiveSessions from '../components/StudentComponents/LiveSessions.vue';
import TimeTable from '../components/StudentComponents/TimeTable.vue';
import StudentSettings from '../components/StudentComponents/StudentSettings.vue';

export default Vue.extend({
  name:"StudentPage",
  head:{
    title:'Student Dashboard',
    meta:[
      {
        hid:'studentDashboard',
        name:'Student Dashboard',
        content:'Contains Student resource and classes, Assignment, TimeTable and student Settings'
      }
    ]
  },
  components:{
    home,Assignment,CourseResources,LiveSessions,
    TimeTable,StudentSettings
  },
  data:()=>({
    //,'Assignment','CourseResources','LiveSessions','TimeTable','StudentSettings'
    activeComponent:'home',
    Buttons:[
      {Name:'Home',btn:'home'},
      {Name:'Assignment',btn:'Assignment'},
      {Name:'Resources',btn:'CourseResources'},
      {Name:'Sessions',btn:'LiveSessions'},
      {Name:'TimeTable',btn:'TimeTable'},
      {Name:'Settings',btn:'StudentSettings'}
  ],
    show:false
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

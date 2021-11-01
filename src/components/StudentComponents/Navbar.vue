<template>
  <nav class="py-4 backG">

    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between ">

        <div>
          <input class="transition-all placeholder-green-500 font-normal subpixel-antialiased
                 w-72 py-1 px-1 rounded focus:outline-none border-none ring-2 ring-green-500
                 focus:ring-green-600 focus:ring-2" placeholder="Search..." type="text"
                 v-model="searchText"
          >
        </div>

        <div class="flex space-x-8">
          <a href="" class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-green-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </a>
          <button class="h-6 w-6 rounded-xl bg-gray-200">

          </button>
        </div>

      </div>
    </div>

  </nav>
</template>

<script lang="ts">
export default {
  name: "Navbar",
  data:()=>({
    searchText:""
  }),
  computed:{},
  methods:{}
}
</script>

<style>
.backG{
  background-color: #fafafa;
}
</style>
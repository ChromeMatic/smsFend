<template>
  <div class="flex justify-between min-h-screen">

    <div class="relative hidden lg:block w-1/2 bg-cover"
         v-bind:style="{ backgroundImage: 'url(' + pic + ')' }"
    ></div>

    <div class="px-2 flex flex-col justify-center items-center flex-auto bg-gray-100">


      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 lg:h-16 lg:w-16 bg-green-400 shadow-xl mt:2 mb-3 text-white rounded-xl" viewBox="0 0 20 20"
             fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      </div>

      <div class="flex flex-col justify-center items-center mt-2 mb-2 lg:mt-4 lg:mb-4 space-y-2">
        <h1 class="lg:text-6xl text-4xl text-gray-500 font-semibold">
          Welcome Back!
        </h1>
        <h3 class="text-xl text-gray-500 font-light">Lets get to learning</h3>
      </div>

      <form class="flex flex-col space-y-4 my-4 lg:my-8" action="">

        <div class="flex flex-col">
          <label class="text-gray-600" >Username</label>
          <input placeholder="Please enter username"
                 class="transition-all placeholder-gray-400 font-semibold w-72
                  py-2 px-1 rounded
                 focus:outline-none border-none ring-2 ring-gray-300
                 focus:ring-green-400 focus:ring-2"
                 v-model="username" type="text">
          <div v-if="show">
            <h3 class=" text-red-600 text-center font-semibold">
              Username incorrect!
            </h3>
          </div>
        </div>

        <div class="flex flex-col">
          <label class="text-gray-600">Password</label>
          <input placeholder="Please enter password"
                 class="transition-all placeholder-gray-400 font-semibold w-72 py-2 px-1 rounded
                 focus:outline-none border-none ring-2 ring-gray-300
                 focus:ring-green-400 focus:ring-2"
                 v-model="password" type="password">
          <div v-if="show">
            <h3  class=" text-red-600 text-center font-semibold">
              Password incorrect!
            </h3>
          </div>
        </div>

      </form>

      <div class="flex justify-center items-center space-x-2">
        <h3 class="font-semibold text-gray-500">Forget Password?</h3>
        <input class="h-4 w-4" v-model="forgetPassword" type="checkbox">
      </div>

      <button
        class=" mt-6 bg-green-400 px-8 py-2 text-white
           font-semibold rounded shadow-2xl
           hover:bg-white
           hover:text-green-400
           transition-all
          "
        v-on:click="login()"
      >
        LOGIN
      </button>

    </div>

  </div>
</template>

<script lang="ts">
import {mapActions} from "vuex";
import Vue from 'vue'
export default Vue.extend({
  name:'index',
  head:{
    title:'SMS Login page',
    meta:[
      {
        hid:'login',
        name:'Login page',
        content:'Login page for School Management Systems application'
      }
    ]
  },
  data:()=>({
    username: "",
    password:"",
    pic:"/loginPic.jpg",
    valid:false,
    show:false,
    forgetPassword:false
  }),
  computed:{
    IsValid(){
      let UserLength:number = this.username.length;
      let PasswordLength:number = this.password.length;

      if (UserLength <= 0 || PasswordLength <= 0){
        return false;
      }else{
        return true;
      }
    }
  },
  methods:{
    ...mapActions("AuthStore",['Login']),
     login(){
      //Validation
      let Valid:boolean = this.IsValid;

      if(!Valid){
        this.show=true
      }else{
        let user ={
          username: this.username,
          password: this.password
        }
        this.Login(user);
        this.$router.push('/AdminPAge');
      }

    }
  }
})
</script>

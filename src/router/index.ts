import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LandingView from '@/views/LandingView.vue';
import TeacherView from  '@/views/TeacherView.vue';
import AdminView from  '@/views/AdminView.vue';
import StudentView from  '@/views/StudentView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'longin',
    component:LandingView
  },
  {
    path:'/Student',
    name:'Student',
    component:StudentView
  },
  {
    path:'/Teacher',
    name:'Teacher',
    component:TeacherView
  },
  {
    path:'/admin',
    name:'admin',
    component:AdminView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

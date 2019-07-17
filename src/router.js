import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      redirect:'/department',
      component: () => import(/* webpackChunkName: "home" */ '@/public/home.vue'),
      children:[
        {
          path: '/employee',
      name: 'employee',
      component: () => import(/* webpackChunkName: "employee" */ '@/views/system/employee.vue'),
      meta:{name:'/employee',
          title:'员工管理'
    }
        },
        {
          path: '/department',
      name: 'department',
      component: () => import(/* webpackChunkName: "department" */ '@/views/system/department.vue'),
      meta:{name:'/department',
          title:'部门管理'
    }
        }
      ]
      
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
    }
  ]
})

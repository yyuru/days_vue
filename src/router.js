import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Project from './views/Project.vue'
import Today from './views/Today.vue'
import Task from './widget/project/projectTask.vue'
import Note from './widget/project/projectNote.vue'
import Weekly from './views/Weekly.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/today',
      name: 'today',
      component: Today
    },
    {
      path:'/project',
      name:'project',
      component:Project,
      children:[
        {
          path:'task',
          name:'task',
          component:Task
        },
        {
          path:'note',
          name:'note',
          component:Note
        }
      ]
    },
    {
      path:'/weekly',
      name:'weekly',
      component:Weekly
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Document from '@/components/Document'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path:"/document/:code",
    	name:"Document",
    	component:Document
    }
  ]
})

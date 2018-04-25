import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Document from '@/components/Document'

Vue.use(Router)

export default new Router({
	/*嵌套路由，使得组件出现在指定区域*/
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: '/document/:code',
        name: 'Document',
        component: Document
      }]
    }

  ]
})

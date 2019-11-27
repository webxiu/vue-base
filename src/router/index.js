import Vue from 'vue'
import Router from 'vue-router'
import Forms from '@/views/Forms'
import Tables from '@/views/Tables'
import HeightLight from '@/views/HeightLight'
import wangEditor from '@/components/wangEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'forms',
      component: Forms
    },
    {
      path: '/wangEditor',
      name: 'wangEditor',
      component: wangEditor
    },
    {
      path: '/table',
      name: 'tables',
      component: Tables
    },
    {
      path: '/heightlight',
      name: 'HeightLight',
      component: HeightLight
    }
  ]
})

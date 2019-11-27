import Vue from 'vue'
import Router from 'vue-router'
import ComForm from '@/views/ComForm'
import ComTable from '@/views/ComTable'
import HeightLight from '@/views/HeightLight'
import wangEditor from '@/components/wangEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComForm',
      component: ComForm
    },
    {
      path: '/wangEditor',
      name: 'wangEditor',
      component: wangEditor
    },
    {
      path: '/table',
      name: 'ComTable',
      component: ComTable
    },
    {
      path: '/heightlight',
      name: 'HeightLight',
      component: HeightLight
    }
  ]
})

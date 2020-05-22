export const routes = [
  {
    path: '/',
    name: 'ComForm',
    meta: { title: '公共表单', icon: 'message' },
    component: () => import('@/views/ComForm')

  },
  {
    path: '/wangEditor',
    name: 'wangEditor',
    meta: { title: '富文本编辑器', icon: 'message' },
    component: () => import('@/views/wangEditor')
  },
  {
    path: '/table',
    name: 'ComTable',
    meta: { title: '公共表格', icon: 'message' },
    component: () => import('@/views/ComTable')
  },
  {
    path: '/heightlight',
    name: 'HeightLight',
    meta: { title: '代码高亮', icon: 'message' },
    component: () => import('@/views/HeightLight')
  },
  {
    path: '/chat',
    name: 'Chat',
    meta: { title: '聊天室', icon: 'message' },
    component: () => import('@/views/Chat')
  }
]
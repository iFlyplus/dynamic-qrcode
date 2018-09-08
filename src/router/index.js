import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '管理',
      component: resolve => require(['@/views/layout/Layout'], resolve),
      children: [
        {
          path: '/manage',
          name: 'manage',
          component: resolve => require(['@/views/qr-manage-content/manage'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: '管理',
      component: resolve => require(['@/views/qr-manage-content/login'], resolve),
    },
    {
      path: '/create',
      name: '管理',
      component: resolve => require(['@/views/qr-manage-content/create'], resolve),
    }
  ]
})

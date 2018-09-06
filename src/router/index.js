import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '管理',
      component: resolve => require(['@/views/layout/Layout'], resolve),
      children:[
        {
          path: '/cardlist',
          name: '管理',
          component: resolve => require(['@/views/qr-manage-content/qrcodeList'], resolve)
        }
      ]
    }
  ]
})

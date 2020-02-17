/*
 * @Descripttion: 
 * @version: 
 * @Author: Sonwen
 * @Date: 2020-02-14 10:33:58
 * @LastEditors  : Sonwen
 * @LastEditTime : 2020-02-14 17:26:39
 */

const routes = [{
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
    path: '',
    component: () => import('pages/Index.vue')
  }]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

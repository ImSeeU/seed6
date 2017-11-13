import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'

import ImgUpload from '@/components/ImgUpload.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/upload',
      name: 'ImgUpload',
      component: ImgUpload
    }
  ]
})

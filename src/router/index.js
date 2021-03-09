import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import( '../views/Home.vue')
    },
    {
      path: '/films',
      name: 'Films',
      component: () => import('../views/Films.vue')
    },
    {
      path: '/formulaire',
      name: 'Formulaire',
      component: () => import('../views/Formulaire.vue')
    },
    {
      path: '/court-metrage',
      name: 'Court-Metrage',
      component: () => import('../views/CourtMetrage.vue')
    },
    {
      path: '/biographie',
      name: 'Biographie',
      component: () => import('../views/Biographie.vue')
    },
  ]
})

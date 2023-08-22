import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [

  {
    path: '/conceitos',
    name: 'Conceitos',
    component: () => import('../views/1-conceitosPOO/view/Index.vue')
  },
  {
    path: '/visibilidade',
    name: 'Visibilidade',
    component: () => import('../views/2-conceitosVisibilidade/view/Index.vue')
  },
  {
    path: '/metodos',
    name: 'MetodosEspeciais',
    component: () => import('../views/3-conceitosMetodos/view/Index.vue')
  },
  {
    path: '/conta-banco',
    name: 'ContaBanco',
    component: () => import('../views/4-ExemploContaBanco/view/Index.vue')
  },
  {
    path: '/encapsulamento',
    name: 'Encapsulamento',
    component: () => import('../views/5-conceitosEncapsulamento/view/Index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

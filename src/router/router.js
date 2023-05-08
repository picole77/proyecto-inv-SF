import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/seguridad',
    name: 'seguridad',
    component: () => import('@/views/seguridad.vue'),
  },  
  {
    path: '/dash',
    name: 'pico',
    component: () => import('@/views/dash.vue'),
  },
  //lista articulos
  {
    path: '/src/views/articulos/listar.vue',
    name: 'listar',
    component: () => import('@/views/articulos/listar.vue'),
  },

    // crear 
  {
    
    path: '/articulos/crear',
    name: 'crear',
    component: () => import('@/views/articulos/crear.vue'),
  },

    // editar
  {
    path: '/articulos/editar/:id',
    name: 'editar',
    component: () => import('@/views/articulos/editar.vue'),
  },

  {
    path: '/ventas',
    name: 'ventas',
    component: () => import('@/views/ventas.vue'),
  },

  {
    path: '/reporte',
    name: 'reporte',
    component: function () {
      return import('../views/reporte.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

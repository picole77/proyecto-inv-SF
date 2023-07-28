import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'
import HomeComponent from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      requiresAuth: false
    },
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/Dashboard.vue'),
  },
  //lista articulos
  {
    path: '/listar-articulos',
    name: 'listar_articulos',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/listar.vue'),
  },
  //lista articulos cocina
  {
    path: '/listar-articulos-cocina',
    name: 'listar_articulos_cocina',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/listar.vue'),
  },
  // editar articulos
  {
    path: '/editar-articulo',
    name: 'editar_articulo',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/editar.vue'),
  },
  {
    
    path: '/articulos/crear',
    name: 'crear_articulo',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/crear.vue'),
  },
    // editar
  {
    path: '/articulos/editar/:id',
    name: 'editar_articulo_cocina',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/editar.vue'),
  },
  //ventas
  {
    path: '/ventas',
    name: 'ventas',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/ventas/ventas.vue'),
  },
  {
    path: '/calendario',
    name: 'calendario',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/articulos/Calendario.vue'),
  }
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//validate if session exist and requires auth is false
router.beforeEach( (to, from, next) => {
  // get session from localstorage
  const session = localStorage.getItem('session')
  // get requires auth value
  const requiresAuth = to.matched.some( (record) => record.meta.requiresAuth)

  if(requiresAuth && !session)
    next({name: 'login'})
  else
    next()
})

export default router

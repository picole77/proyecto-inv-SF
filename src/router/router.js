import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      requiresAuth: false
    },
    component: Login
  },
  {
    path: '/',
    name: 'dashboard',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/Dashboard.vue'),
  },
  //lista articulos
  {
    path: '/articulos/listar',
    name: 'listar_articulos',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/ListarArticulo.vue'),
  },
  // editar articulos
  {
    path: '/articulos/editar',
    name: 'editar_articulo',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/EditarArticulo.vue'),
  },
  {
    
    path: '/articulos/crear',
    name: 'crear_articulo',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/CrearArticulo.vue'),
  },
  //lista articulos cocina
  {
    path: '/articulos-cocina/listar',
    name: 'listar_articulos_cocina',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos_cocina/ListarArticulosCocina.vue'),
  },
  // crear
  {
    path: '/articulos-cocina/crear',
    name: 'crear_articulo_cocina',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos_cocina/CrearArticuloCocina.vue')
  },
    // editar
  {
    path: '/articulos-cocina/editar',
    name: 'editar_articulo_cocina',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos_cocina/EditarArticuloCocina.vue'),
  },
  //ventas
  {
    path: '/ventas',
    name: 'ventas',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/ventas/Ventas.vue'),
  },
  {
    path: '/reportes',
    name: 'reportes',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/ventas/Recibo.vue')
  },
  {
    path: '/calendario',
    name: 'calendario',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/CalendarioArticulos.vue'),
  },
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      requiresAuth: false
    },
    component: HomeView
  },

  {
    path: '/seguridad',
    name: 'seguridad',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/seguridad.vue'),
  },  
  {
    path: '/dashboard',
    name: 'pico',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/dash.vue'),
  },
  // articulos cocina ---------

  //lista articulos
  {
    path: '/listar-articulos-cocina',
    name: 'listar',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/arti_cocina/listar.vue'),
  },
  
    // editar
    {
      path: '/editar-articulo',
      name: 'editar',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/views/articulos/editar.vue'),
    },

    //inventario general (articulos) --------------------------------------------------------------------------------------
  //lista articulos
  {
    path: '/listar-articulos',
    name: 'listar',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/listar.vue'),
  },
    // crear 
  {
    
    path: '/articulos/crear',
    name: 'crear',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos/crear.vue'),
  },

    // editar
  {
    path: '/articulos/editar/:id',
    name: 'editar',
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
// reporte
  {
    path: '/reporte',
    name: 'reporte',
    meta: { 
      requiresAuth: true
    },
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
/* validate if session exist and requires auth is false
router.beforeEach( (to, from, next) => {
  // get session from localstorage
  const session = localStorage.getItem('session')
  // get requires auth value
  const requiresAuth = to.matched.some( (record) => record.meta.requiresAuth)

  if(requiresAuth && !session)
    next({name: 'login'})
  else
    next()
})*/

export default router

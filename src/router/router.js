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
  },
    //Ususarios
  {
    path: '/usuarios',
    name: 'usuarios',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/components/Usuarios.vue')
  },
 //crear comida
  {
    path: '/articulos_cocina/crearcomida',
    name: 'crear_comida',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/articulos_cocina/Crearcomida.vue')
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
        //ventasproductos
  {
    path: '/ventas/Formventpro',
    name: 'ventasProductos',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/ventas/Formventpro.vue'),
  },
  {
    path: '/ventas/Ventcomida',
    name: 'ventascomida',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/ventas/Ventcomida.vue'),
  },
  {
    path: '/ventas/Formulario',
    name: 'formulario',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/ventas/Formulario.vue'),
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
    path: '/reportes/detalles',
    name:'detalles_reporte',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/ventas/DetallesRecibo.vue')
  },
  {
    path: '/reportes/detalles_almacen',
    name: 'detalles_almacen',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/ventas/DetallesArticulo.vue')
  },
  {
    path: '/reportes/detalles_cocina',
    name: 'detalles_cocina',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/ventas/DetallesCocina.vue')
  },
  {
    path: '/pdf/ventas',
    name: 'pdf_ventas',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/pdfviews/PDFVenta.vue')
  },
  {
    path: '/pdf/articulos',
    name: 'pdf_articulos',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/pdfviews/PDFArticulo.vue')
  },
  {
    path: '/pdf/cocina',
    name: 'pdf_cocina',
    meta: {
      requiresAuth: true
    },
    component: () => import('@/views/pdfviews/PDFCocina.vue')
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

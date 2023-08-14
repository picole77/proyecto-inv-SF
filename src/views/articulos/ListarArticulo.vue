<template>
<div>
  <v-container id="listar" fluid tag="section">
    <v-card
      color="red-lighten-4"
      flat
      height="80px"
      rounded="0">
      <v-toolbar class="font-weight-black my-3" elevation="1" 
      rounded color="red-lighten-4 accent-4" density="compact">
          <v-toolbar-title>Inventario General</v-toolbar-title>

          <v-text-field
              class="spacing-playground pa-6"
              background-color="white"
              hide-details
              prepend-icon="mdi-magnify"
              single-line
              >
          </v-text-field>
      </v-toolbar>
    </v-card>
    <v-container>
      <v-row no-gutters >
        <v-col>
          <v-btn to="/articulos/crear" tyle color="#00c853">
            <v-icon left>mdi-plus</v-icon>
            Nuevo Artículo
          </v-btn>
        </v-col>
        <v-col>
          <v-btn tyle color="#F3AA60" @click.stop="ingresoDialog=true">
            <v-icon left>mdi-cart-outline</v-icon>
            Ingresar
          </v-btn>
        </v-col>
        <v-col>
          <v-btn tyle color="#525FE1" @click.stop="entregaDialog=true">
            <v-icon left>mdi-exit-to-app</v-icon>
            Entregar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-simple-table >
      <thead height="80px">
        <tr class="text-subtitle-8">
          <th class="primary--text">
            ID
          </th>
          <th class="primary--text">
            Código de Barras
          </th>
          <th class="primary--text">
            Nombre
          </th>
          <th class="primary--text">
            Descripción
          </th>
          <th class="primary--text">
            Precio de Compra
          </th>
          <th class="primary--text">
            Precio de Venta
          </th>
          <th class="primary--text">
            Stock
          </th>
          <th class="primary--text">
            Imagen
          </th>
          <th class="text-right primary--text">
            Acciones
          </th>
        </tr>
      </thead>

      <tbody class="font-weight-bold">
        <tr v-for="articulo in articulos" :key="articulo.id">
          <td>{{ articulo.id }}</td>
          <td>{{ articulo.codigo_barras}}</td>
          <td>{{ articulo.nombre }}</td>
          <td>{{ articulo.descripcion }}</td>
          <td>${{ articulo.precio_compra }}</td>
          <td>${{ articulo.precio_venta }}</td>
          <td>{{ articulo.stock }}</td>
          <td><img :src='url+articulo.imagen' :alt="articulo.nombre" width="80"></td>
          <td class="w-100">
            <v-btn :to="{name:'editar_articulo', params:{id:articulo.id}}" fab small color="light-blue"><v-icon>mdi-pencil</v-icon></v-btn>
            <v-btn @click.stop="dialog=true" @click="id=articulo.id" fab small color="orange darken-4"><v-icon>mdi-delete</v-icon></v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  
    <!-- DELETE DIALOG -->
    <v-dialog v-model="dialog" max-width="350">
      <v-card>
        <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <V-btn @click="dialog = false">Cancelar</V-btn>
          <V-btn @click="confirmarBorrado(id)" color="error">Aceptar</V-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- COCINA DIALOG -->
    <v-layout row justify-center>
      <v-dialog
        v-model="cocinaDialog"
        max-width="600"
      >
        <v-card>
          <v-img
          
          aspect-radio="2.75"
          ></v-img>
          <v-card-title class="headline">Agregar Articulos a Cocina</v-card-title>
          <div>
            <v-text-field
              class="w-50 mx-4"
              v-model="cocina_codigo_barras"
              label="Código de barras"
              outlined
            ></v-text-field>
            <v-text-field
              class="w-50 mx-4"
              v-model="cocina_nombre"
              label="Nombre del articulo"
              outlined
            ></v-text-field>
            <v-text-field
              class="w-50 mx-4"
              v-model="cocina_descripcion"
              label="Descripción del articulo"
              outlined
            ></v-text-field>
            <v-text-field
              class="w-50 mx-4"
              v-model="cocina_precio_compra"
              label="Precio de compra"
              outlined
            ></v-text-field>
            <v-text-field
              class="w-50 mx-4"
              v-model="cocina_precio_venta"
              label="Precio de venta"
              outlined
            ></v-text-field>
            <v-text-field
              class="w-50 mx-4"
              v-model="cocina_stock"
              type="number"
              label="Stock"
              outlined
            ></v-text-field>
          </div>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              @click="cocinaDialog = false"
            >
              Cancelar
            </v-btn>

            <v-btn
              color="green darken-1"
              @click="cocinaDialog = false"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- INGRESO DIALOG -->
    <v-layout row justify-center>
      <v-dialog
        v-model="ingresoDialog"
        max-width="900"
      >
        <v-card>
          <v-img
          aspect-radio="2.75"
          ></v-img>
          <v-card-title class="headline">Registro de Ingresos</v-card-title>
          <v-row class="justify-start mx-4">
            <v-col
              class="d-flex mt-4"
              cols="12"
              sm="4"
            >
              <v-text-field color="#76FF03"
                v-model="ingreso.fecha"
                  label="Fecha de ingreso"
                  hint="MM/DD/YYYY format"
                  type="date"
                  outlined
                  required
              ></v-text-field>
            </v-col>
            <v-col 
              class="d-flex align-baseline"
              cols="12"
              sm="12">
                <v-text-field
                v-model="ingreso.usuario"
                color="#76FF03"
                label="Usuario"
                outlined
                readonly
                required
                ></v-text-field>
              </v-col>
            <v-col 
            class="d-flex"
            cols="12"
            sm="12"
            >
              <v-select 
                outlined
                @change="selectProduct(ingreso.select.id)"
                v-model="ingreso.select"
                :items="articulos" 
                item-text="nombre"
                item-value="id"
                return-object
                label="Seleccione un producto"
              >
              </v-select>
            </v-col>
            <v-col 
            class="d-flex align-baseline"
            cols="12"
            sm="6">
              <v-text-field
              v-model="ingreso.precio"
              color="#76FF03"
              type="number"
              label="Precio"
              outlined
              required
              ></v-text-field>
            </v-col>
            <v-col 
            class="d-flex px-0"
            cols="12"
            sm="12"
            >
              <v-col 
                class="d-flex"
                cols="12"
                sm="6"
              >
              <v-text-field
                v-model="ingreso.cantidad"
                class="w-25"
                color="#76FF03"
                label="Cantidad"
                type="number"
                outlined
                required
              ></v-text-field>
              </v-col>
              <v-col 
                class="d-flex"
                cols="12"
                sm="6"
              >
                <v-btn
                  @click="insertProductIntoTable"
                  color="primary"
                >
                  Agregar
                </v-btn>
              </v-col>
          
            </v-col>
          </v-row>
          <div class="mx-4">
            <v-simple-table>
              <thead>
                <th class="primary--text text-left">
                  #ID
                </th>
                <th class="primary--text text-left">
                  Producto
                </th>
                <th class="primary--text">
                  Cantidad
                </th>
                <th class="primary--text">
                  Opciones
                </th>
              </thead>
              <tbody>
                <tr v-for="product in ingreso.products"
                :key="product.id_producto">
                  <td>{{ product.id_producto }}</td>
                  <td>{{ product.nombre }}</td>
                  <td class="text-center">{{ product.cantidad }}</td>
                  <td class="text-center">
                    <v-btn class="text-center" fab small color="red darken-4" @click="deleteItemIngreso(product.id_producto)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
          <v-card-actions class="mt-5">
            <v-spacer></v-spacer>

            <v-btn
              color="secondary darken-1"
              @click="cleanListOfProducts"
            >
              Cancelar
            </v-btn>

            <v-btn
              color="success darken-1"
              @click="updateMultipleProductStock"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- ENTREGA DIALOG -->
    <v-layout row justify-center>
      <v-dialog
        v-model="entregaDialog"
        max-width="900"
      >
        <v-card>
          <v-img
          aspect-radio="2.75"
          ></v-img>
          <v-card-title class="headline">Entrega de Productos</v-card-title>
          <v-row class="justify-start mx-4">

            <v-col
              class="d-flex mt-4"
              cols="12"
              sm="4">
              <v-text-field color="#76FF03"
                v-model="entrega.fecha"
                  label="Fecha de entrega de productos"
                  hint="MM/DD/YYYY format"
                  type="date"
                  outlined
                  required
              ></v-text-field>
            </v-col>

            <v-col 
            class="d-flex align-baseline"
            cols="12"
            sm="12">
              <v-text-field
              v-model="entrega.usuario"
              color="#76FF03"
              label="Usuario"
              outlined
              readonly
              required
              ></v-text-field>
            </v-col>
            <v-col 
            class="d-flex"
            cols="12"
            sm="12">
              <v-select outlined
                @change="selectClient(entrega.clientes.id)"
                v-model="entrega.clientes"
                :items="clientes" 
                item-text="tipo_cliente"
                item-value="id"
                return-object
                required
                label="Personal de cocina que recibe los productos ">
              </v-select>
            </v-col>
            

            <v-col 
            class="d-flex"
            cols="12"
            sm="12">
              <v-select outlined
                @change="selectProductToCocina(entrega.producto.id)"
                v-model="entrega.producto"
                :items="articulos" 
                item-text="nombre"
                item-value="id"
                return-object
                required
                label="Seleccione los productos">
              </v-select>
            </v-col>
            
            <v-col 
            class="d-flex align-baseline"
            cols="12"
            sm="6">
              <v-text-field
              v-model="entrega.precio"
              color="#76FF03"
              type="number"
              label="Precio de venta"
              outlined
              required
              ></v-text-field>
            </v-col>

            
            <v-col 
            class="d-flex px-0"
            cols="12"
            sm="12"
            >
              <v-col 
                class="d-flex"
                cols="12"
                sm="6"
              >
              <v-text-field
                v-model="entrega.cantidad"
                class="w-25"
                color="#76FF03"
                label="Cantidad de unidades a entregar"
                type="number"
                outlined
                required
              ></v-text-field>
              </v-col>

              <v-col 
                class="d-flex"
                cols="12"
                sm="6"
              >
                <v-btn
                  @click="insertProductIntoEntregaTable"
                  color="primary"
                >
                  Agregar
                </v-btn>
              </v-col>
          
            </v-col>
          </v-row>
          <div class="mx-4">
            <v-simple-table>
              <thead>
                <th class="primary--text text-left">
                  #ID
                </th>
                <th class="primary--text text-left">
                  Producto
                </th>
                <th class="primary--text text-left">
                  Cantidad
                </th>
              </thead>
              <tbody>
                <tr v-for="product in entrega.products"
                :key="product.id_producto">
                  <td>{{ product.id_producto }}</td>
                  <td>{{ product.nombre }}</td>
                  <td class="text-center">{{ product.cantidad }}</td>
                  <td class="text-center">
                    <v-btn class="text-center" fab small color="red darken-4" @click="deleteItemEntrega(product.id_producto)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>

          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn
              color="secondary darken-1"
              @click="cleanListOfEntregaProducts()"
            >
              Cancelar
            </v-btn>

            <v-btn
              color="success darken-1"
              @click="saveAllProductsIntoCocina()"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</div>
</template>

<script>
let url = 'http://localhost:3000/api/';
let imageURL = "http://localhost:3000/products/"
import axios from 'axios';
import VueSimpleAlert from 'vue-simple-alert'

export default{
  name:'listar',
  mounted(){
    this.obtenerArticulos();
    this.currentUser(),
    this.clientsList()
  },
  data(){
    return{
      dialog: false,
      ingresoDialog: false,
      entregaDialog: false,
      cocinaDialog: false,
      url: imageURL,
      clientes: [],
      articulos:null,
      cocina_codigo_barras: '',
      cocina_nombre: '',
      cocina_descripcion: '',
      cocina_precio_compra: null,
      cocina_precio_venta: null,
      cocina_stock : null,
      id_usuario: 0,
      temp_ingreso_stock: 0,
      ingreso: {
        id_producto: 0,
        select: null,
        usuario: '',
        nombre: '',
        fecha: new Date().toISOString().split('T')[0],
        precio: null,
        cantidad: null,
        products: []
      },
      entrega: {
        id_producto: 0,
        codigo_barras : 0,
        producto: null,
        usuario: '',
        clientes: null,
        caducidad: null,
        imagen: null,
        fecha: new Date().toISOString().split('T')[0],
        nombre: '',
        stock: 0,
        precio: null,
        cantidad: null,
        products: []
      }
    }
  },
  methods:{
    obtenerArticulos(){
      axios.get(`${url}articulos?page=1&limit=25`)
      .then(response => {
      this.articulos = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    confirmarBorrado(id){
      axios.delete(`${url}articulos/${id}`)
      .then(() => {
        // display success deleted
        VueSimpleAlert.fire({
          title: 'Eliminado',
          text: 'Se ha eliminado correctamente el articulo',
          type:'success',
          timer: 1000
        })

        this.obtenerArticulos();
        
        this.dialog = false;

      })
      .catch((error) => {
          const message = error.response.data.message

          VueSimpleAlert.fire({
            title: 'Error',
            text: `${message}`,
            type: 'error',
            
          })
          
        })
    },
    currentUser() {
      const session = localStorage.getItem('session')
      const parseSession = JSON.parse(session)

      this.ingreso.usuario = parseSession.nombre_usuario
      this.entrega.usuario = parseSession.nombre_usuario
      this.id_usuario = parseSession.id
    },
    clientsList() {
      axios.get(`${url}clientes?page=1&limit=25`)
      .then(response => {
        this.clientes = response.data.data
      })
    },
    selectClient(id) {
      this.entrega.clientes = id
    },
    /**********************************************/
    /************** INGRESO METHODS **************/
    /*********************************************/
    selectProductToCocina(id) {
      // find element into array using id
      const article = this.articulos.find(item => item.id === id)
      // insert values into fields
      this.entrega.id_producto = article.id
      this.entrega.nombre = article.nombre
      this.entrega.precio = article.precio_venta
      this.entrega.stock = article.stock
      this.entrega.caducidad = article.caducidad 
      this.entrega.codigo_barras = article.codigo_barras
      this.entrega.imagen = article.imagen
    },
    cleanListOfEntregaProducts() {
      this.entrega.products = []
      this.entregaDialog = false
    },
    deleteItemEntrega(id) {
      // find item id
      const findId = this.entrega.products.map(item => item.id_producto).indexOf(id)
      // remove from array
      this.entrega.products.splice(findId, 1)
    },
    insertProductIntoEntregaTable() {
      // create object to save into array
        const product = {
          "id_articulo": this.entrega.id_producto,
          "nombre": this.entrega.nombre,
          "precio": this.entrega.precio,
          "stock" : this.entrega.stock,
          "caducidad": this.entrega.caducidad,
          "codigo_barras": this.entrega.codigo_barras,
          "imagen": this.entrega.imagen,
          "cantidad": this.entrega.cantidad,
          "id_usuario": this.id_usuario,
          "id_cliente": this.entrega.clientes,
          "fecha": this.entrega.fecha
        }
        // console.log(product);
        if(product.id_producto === 0 && product.nombre === '') {
          
          VueSimpleAlert.fire({
            title: 'Error',
            text: '¡Campos vacios, por favor seleccione un producto y vuelva a intentarlo!',
            type: 'info'
          })

          return
        }
        // insert product into array
        this.entrega.products.push(product)
        // when pushed object into array clean values
        this.entrega.id_producto = 0
        this.entrega.clientes = null
        this.entrega.producto = null
        this.entrega.nombre = ""
        this.entrega.precio = null
        this.entrega.cantidad = null
        this.entrega.stock = 0
        this.entrega.caducidad = null
        this.entrega.codigo_barras = 0
        this.entrega.imagen = null
    },
    saveAllProductsIntoCocina() {
      
      axios.post(`${url}cocina/registrar`, this.entrega.products)
      .then( response => {
        VueSimpleAlert.fire({
          title: 'Creado exitosamente',
          text: response.data.message,
          type: 'success',
        }).then( () => this.cleanListOfEntregaProducts() )
      })
      .catch(error => {
        console.log(error);
        VueSimpleAlert.fire({
          title: 'Error',
          text: 'Ah ocurrido un error al guardar los productos, por favor intentelo nuevamente',
          type: 'error',
          timer: 1500
        })
      })
    },
    /**********************************************/
    /************** INGRESO METHODS **************/
    /*********************************************/
    selectProduct(id) {
      // find element into array using id
      const article = this.articulos.find(item => item.id === id)
      // insert values into fields
      this.ingreso.id_producto = article.id
      this.ingreso.nombre = article.nombre
      this.ingreso.precio = article.precio_venta
      this.temp_ingreso_stock = article.stock
    },
    cleanListOfProducts() {
      this.ingreso.products = []
      this.ingresoDialog = false
    },
    deleteItemIngreso(id) {
      // find item id
      const findId = this.ingreso.products.map(item => item.id_producto).indexOf(id)
      // remove from array
      this.ingreso.products.splice(findId, 1)
    },
    insertProductIntoTable() {
      // create object to save into array
        const product = {
          "id_producto": this.ingreso.id_producto,
          "nombre": this.ingreso.nombre,
          "precio": this.ingreso.precio,
          "cantidad": parseInt(this.ingreso.cantidad) + parseInt(this.temp_ingreso_stock),
          "fecha": this.ingreso.fecha
        }
        // console.log(product);
        if(product.id_producto === 0 && product.nombre === '') {
          
          VueSimpleAlert.fire({
            title: 'Error',
            text: '¡Campos vacios, por favor seleccione un producto y vuelva a intentarlo!',
            type: 'info'
          })

          return
        }
        // insert product into array
        this.ingreso.products.push(product)
        // when pushed object into array clean values
        this.ingreso.id_producto = 0
        this.ingreso.select = null
        this.ingreso.nombre = ""
        this.ingreso.precio = null
        this.ingreso.cantidad = null
        this.temp_ingreso_stock = 0
    },
    updateMultipleProductStock() {
      // axios request to save products
      axios.put(`${url}articulos/multiple`, this.ingreso.products)
      .then(response => {
        console.log(response);
        VueSimpleAlert.fire({
          title: 'Productos Actualizados',
          text: `${response.data.message}`,
          type: 'success',
          timer: 1500
        }).then( () => {
          this.cleanListOfProducts()
        })
      })
      .catch(error => {
        VueSimpleAlert.fire({
          title: 'Error',
          text: 'Ocurrió un error al actualizar los productos',
          type:'error',
          timer: 1500
        })
      })
    }
  }
}
</script>
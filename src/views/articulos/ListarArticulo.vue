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
          <td><img :src="articulo.imagen" :alt="articulo.nombre"></td>
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
            class="d-flex"
            cols="12"
            sm="12"
            >
              <v-select outlined
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
                    <v-btn class="text-center" fab small color="red darken-4">
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
              @click="ingresoDialog = false"
            >
              Cancelar
            </v-btn>

            <v-btn
              color="success darken-1"
              @click="saveAllProductsIntoCocina"
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
              sm="4"
            >
              <v-text-field color="#76FF03"
                v-model="entrega.fecha"
                  label="Fecha de entrega"
                  hint="MM/DD/YYYY format"
                  type="date"
                  outlined
                  required
              ></v-text-field>
            </v-col>
            <v-col 
            class="d-flex"
            cols="12"
            sm="12"
            >
              <v-select outlined
                @change="selectClient(entrega.clientes.id)"
                v-model="entrega.clientes"
                :items="clientes" 
                item-text="nombre"
                item-value="id"
                return-object
                required
                label="Personal de cocina"
              >
              </v-select>
            </v-col>
            <v-col 
            class="d-flex"
            cols="12"
            sm="12"
            >
              <v-select outlined
                @change="selectProductToCocina(entrega.producto.id)"
                v-model="entrega.producto"
                :items="articulos" 
                item-text="nombre"
                item-value="id"
                return-object
                required
                label="Seleccione un producto"
              >
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
                v-model="entrega.cantidad"
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
                <tr v-for="product in entrega.products"
                :key="product.id_producto">
                  <td>{{ product.id_producto }}</td>
                  <td>{{ product.nombre }}</td>
                  <td class="text-center">{{ product.cantidad }}</td>
                  <td class="text-center">
                    <v-btn class="text-center" fab small color="red darken-4">
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
              @click="entregaDialog = false"
            >
              Cancelar
            </v-btn>

            <v-btn
              color="success darken-1"
              @click="entregaDialog = false"
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
let url = 'http://localhost:3000/api/articulos';
import axios from 'axios';
import VueSimpleAlert from 'vue-simple-alert'

export default{
  name:'listar',
  mounted(){
    this.obtenerArticulos();
  },
  data(){
    return{
      dialog: false,
      ingresoDialog: false,
      entregaDialog: false,
      cocinaDialog: false,
      articulos:null,
      cocina_codigo_barras: '',
      cocina_nombre: '',
      cocina_descripcion: '',
      cocina_precio_compra: null,
      cocina_precio_venta: null,
      cocina_stock : null,
      ingreso: {
        id_producto: 0,
        select: null,
        nombre: '',
        fecha: new Date().toISOString().split('T')[0],
        precio: 0,
        cantidad: 0,
        products: []
      },
      entrega: {
        id_producto: 0,
        clientes: null,
        producto: null,
        fecha: new Date().toISOString().split('T')[0],
        nombre: '',
        precio: 0,
        cantidad: 0,
        products: []
      }
    }
  },
  methods:{
    obtenerArticulos(){
      axios.get(`${url}?page=1&limit=25`)
      .then(response => {
      this.articulos = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    confirmarBorrado(id){
      axios.delete(`${url}/${id}`)
      .then(()=>{
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
    sendToCocina(articulo) {
      console.log(articulo);
      this.cocina_codigo_barras = articulo.codigo_barras
      this.cocina_nombre = articulo.nombre
      this.cocina_descripcion = articulo.descripcion
      this.cocina_precio_compra = articulo.precio_compra
      this.cocina_precio_venta = articulo.precio_venta
      this.cocina_stock = articulo.stock
    },
    selectProduct(id) {
      // find element into array using id
      const article = this.articulos.find(item => item.id === id)
      // insert values into fields
      this.ingreso.id_producto = article.id
      this.ingreso.nombre = article.nombre
      this.ingreso.precio = article.precio_venta
    },
    selectProductToCocina(producto) {

    },
    insertProductIntoTable() {
      // create object to save into array
        const product = {
          "id_producto": this.ingreso.id_producto,
          "nombre": this.ingreso.nombre,
          "precio": this.ingreso.precio,
          "cantidad": this.ingreso.cantidad,
          "fecha": this.ingreso.fecha
        }
        // insert product into array
        this.ingreso.products.push(product)
        // when pushed object into array clean values
        this.ingreso.id_producto = 0
        this.ingreso.select = null
        this.ingreso.nombre = ""
        this.ingreso.precio = 0,
        this.ingreso.cantidad = 0
    },
    saveAllProductsIntoCocina() {
      // axios request to save products
      axios.post(`${url}/cocina`, this.ingreso.products)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>
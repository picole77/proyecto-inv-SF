<template>
  <v-card>
    <div>
    <h1>Ventas</h1>
    </div>
    <div class="d-flex justify-end">
      <v-label class="text-h3 mr-10">0.00</v-label>
    </div>
    <v-divider color="info"></v-divider>
    <div class="d-flex mx-2 justify-center">
      <div>
        <v-label>Código de barras</v-label>
        <v-text-field variant="outlined"></v-text-field>
      </div>
      <div>
        <v-label>Descripción</v-label>
        <v-text-field variant="outlined"></v-text-field>
      </div>
      <div>
        <v-label>Precio</v-label>
        <v-text-field variant="outlined"></v-text-field>
      </div>
      <div>
        <v-label>Cantidad</v-label>
        <v-text-field variant="outlined"></v-text-field>
      </div>
      <div>
        <v-label>SubTotal</v-label>
        <v-text-field variant="outlined"></v-text-field>
      </div>
    </div>
    <v-container>
      <v-table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Codigo de Barras</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio de Compra</th>
            <th>Precio de Venta</th>
            <th>Stock</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in products"
            :key="item.id"
          >
              <td>{{ item.id }}</td>
              <td>{{ item.codigo_barras}}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.descripcion }}</td>
              <td>{{ item.precio_compra }}</td>
              <td>{{ item.precio_venta }}</td>
              <td>{{ item.stock }}</td>
              <td>{{ item.imagen }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
    <v-spacer></v-spacer>
    <div class="d-flex justify-space-around mb-6 bg-surface-variant mx-auto " >
      <v-btn color="success" class="mt-2 font-weight-black">Guardar</v-btn>
      <v-btn color="error" class="mt-2 font-weight-black">Cancelar</v-btn>
      <v-btn color="info" class="mt-2 font-weight-black">Imprimir</v-btn>
    </div> 
  </v-card>
</template>

<script>
//url de los articulos
const url = "http://localhost:3000/api/articulos"
//uso de axios, libreria que permite hacer peticiones a una API, HTTP
import axios from 'axios'

export default {
  name: 'Ventas',
  //siempre declarar un data
  data() {
    return {
      products: [],
    }
  },
  //para generar o crear métodos
  methods: {
    //metodo para obtener los productos
    loadProducts() {
      // then y catch son propiedades de una PROMESA
      axios.get(url)
      // en caso de que la respuesta sea correcta
      .then(response => {
        //primer data respuesta de axios
        //segundo data es respuesta de la api
        this.products = response.data.data;
        console.log(this.products)
        
      })
      // en caso de que ocurra un error al hacer la petición
      .catch((error) => {
        console.log(error);
      })
    },
    //metodo para hacer la búsqueda del producto por su código
    loadProductByBarCode(search) {
      //realizar peticion de axios para buscar el producto
      // revisar la api de NODEJS donde esté la busqueda por producto
      // linea 12 y 13
      // <v-label>Código de barras</v-label>
      //  <v-text-field variant="outlined"></v-text-field>
      // si esto en HTML no permite ingresar texto para busqueda cambiarlo por un input normal
      // este código pegarlo en la línea indicada
      //usar las propiedades de onchange de vuejs para buscar
    }
  },
  //para ejecutar tus métodos
  //montar tus métodos o funciones
  mounted() {
    this.loadProducts()
  }
}
</script>
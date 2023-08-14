<template>
  <v-container>
    <v-card>
      <div>  
        <v-card>
          <h1>seleccione el tipo de Venta</h1>
        <v-layout class="overflow-visible" style="height: 56px;">
          <v-container>
          <v-row no-gutters >
            <v-col>
                  <v-btn tyle color="#00c853" to="/ventas/Formventpro">
                    <v-icon left>mdi-cart-outline</v-icon>
                    Realizar venta
                  </v-btn>
                </v-col>
                <!-- <v-col>
                  <v-btn tyle color="#F3AA60" to="/ventas/Ventcomida">
                    <v-icon left>mdi-cart-outline</v-icon>
                      Comida
                  </v-btn>
                </v-col> -->
          </v-row>
        </v-container>
      </v-layout>
    </v-card>
      </div>
      <v-container>
        <v-simple-table>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Usuario</th>
              <th>Tipo Cliente</th>
              <th>Tipo Venta</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="venta in ventas"
              :key="venta.id"
            >
                <td>{{ venta.id }}</td>
                <td>{{ venta.nombre_usuario }}</td>
                <td>{{ venta.tipo_cliente }}</td>
                <td>{{ venta.tipo_venta }}</td>
                <td>{{ venta.nombre }}</td>
                <td>{{ venta.precio }}</td>
                <td>{{ venta.cantidad }}</td>
                <td>{{ venta.total }}</td>
                <td>{{ venta.fecha }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-container>
      <v-spacer></v-spacer>
      <div class="d-flex justify-space-around mb-6 bg-surface-variant mx-auto " >
        <v-btn color="info" class="mt-2 font-weight-black">Imprimir</v-btn>
      </div> 
    </v-card>
    <!-- comida DIALOG -->
    <v-layout row justify-center>
        <v-dialog
          v-model="ventaProductDialog"
          max-width="800">
          <v-card>
            <v-img
            aspect-radio="2.75"
            ></v-img>
            <v-card-title class="headline e-font-color-2">Venta de Productos</v-card-title>
            <div class="d-flex justify-end">
              <v-label class="text-h3 mr-10">0.00</v-label>
            </div>
            <div>
              <div>
              <v-select class="color-green"
                    label="Seleccione el tipode comida "
                    :items="['Entomatadas', 'Enfrijoladas', 'Sandwich', 'Huevos con jamon', 'Huevos a la mexicana', 'pechuga de pollo y ensalada']"
              ></v-select>
              </div>
              <div class="d-flex mx-2 justify-center">
                 <v-col 
                  class="d-flex"
                  cols="12"
                  sm="6"
                >
                <v-text-field         
                  class="w-25"
                  color="#76FF03"
                  label="Cantidad"
                  type="number"
                  outlined
                  required
                ></v-text-field>
                 <div>
                  <v-label>Preciooooo</v-label>
                  <v-text-field v-model="precio" variant="outlined"></v-text-field>
                </div>  
                </v-col>
              </div>      
            </div>
            <div class="d-flex mx-2 justify-center">
              <div>
                <v-label>Nombre</v-label>
                <v-text-field v-model="nombre" variant="outlined"></v-text-field>
              </div>
              <div>
                <v-label>Precio</v-label>
                <v-text-field v-model="precio" variant="outlined"></v-text-field>
              </div>
              <div>
                <v-label>Cantidad</v-label>
                <v-text-field v-model="cantidad" variant="outlined"></v-text-field>
              </div>
              <div>
                <v-label>SubTotal</v-label>
                <v-text-field v-model="subtotal" variant="outlined"></v-text-field>
              </div>
              <div>
                <v-label>Total</v-label>
                <v-text-field v-model="subtotal" variant="outlined"></v-text-field>
              </div>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                @click="ventaProductDialog = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="green darken-1"
                @click="saveProductSale({nombre, precio, cantidad, subtotal})"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-layout>
    <!-- PRODUCT DIALOG -->
    <v-layout row justify-center>
        <v-dialog
          v-model="ventaComidaDialog"
          max-width="800">
          <v-card>
            <v-img
            aspect-radio="2.75"
            ></v-img>
            <v-card-title class="headline e-font-color-2">Venta de Comida</v-card-title>
            <div class="d-flex justify-end">
              <v-label class="text-h3 mr-10">0.00</v-label>
            </div>
            <div>
              <div>

              <v-select class="color-green"
                    label="Seleccione el tipode comida "
                    :items="['Entomatadas', 'Enfrijoladas', 'Sandwich', 'Huevos con jamon', 'Huevos a la mexicana', 'pechuga de pollo y ensalada']"
              ></v-select>
              </div>
              <div class="d-flex mx-2 justify-center">
                 <v-col 
                  class="d-flex"
                  cols="12"
                  sm="6"
                >
                <v-text-field
                 
                  class="w-25"
                  color="#76FF03"
                  label="Cantidad"
                  type="number"
                  outlined
                  required
                ></v-text-field>
                 <div>
                  <v-label>Precio</v-label>
                  <v-text-field v-model="precio" variant="outlined"></v-text-field>
                </div>
                
                </v-col>
              </div>
            </div>
            <v-divider color="info"></v-divider>
            <div class="d-flex mx-2 justify-center">
              <div>
                <v-label>Nombre</v-label>
                <v-text-field v-model="nombre" variant="outlined"></v-text-field>
              </div>
              <div>
                <v-label>Precio</v-label>
                <v-text-field v-model="precio" variant="outlined"></v-text-field>
              </div>
              <div>
                <v-label>Cantidad</v-label>
                <v-text-field v-model="cantidad" variant="outlined"></v-text-field>
              </div>
              <div>
                <v-label>SubTotal</v-label>
                <v-text-field v-model="subtotal" variant="outlined"></v-text-field>
              </div>
              <div>
                <v-label>Total</v-label>
                <v-text-field v-model="subtotal" variant="outlined"></v-text-field>
              </div>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
  
              <v-btn
                color="red darken-1"
                @click="ventaComidaDialog = false"
              >
                Cancelar
              </v-btn>
  
              <v-btn
                color="green darken-1"
                @click="saveProductSale({nombre, precio, cantidad, subtotal})"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-layout>

     <!-- producto DIALOG -->
      <v-layout row justify-center>
          <v-dialog
            v-model="ventaDialog"
            max-width="600">
            <v-card>
              <v-img
              aspect-radio="2.75"
              ></v-img>
              <v-card-title class="headline e-font-color-2">Agregar producto seleccionado</v-card-title>
              <div class="d-flex justify-end">
                <v-label class="text-h3 mr-10">0.00</v-label>
              </div>
              <div>
                <div>
                <v-select class="color-green"
                      label="Seleccione el tipode comida "
                      :items="['Entomatadas', 'Enfrijoladas', 'Sandwich', 'Huevos con jamon', 'Huevos a la mexicana', 'pechuga de pollo y ensalada']"
                ></v-select>
                </div>
                <div class="d-flex mx-2 justify-center">
                   <v-col 
                    class="d-flex"
                    cols="12"
                    sm="6"
                  >
                  <v-text-field         
                    class="w-25"
                    color="#76FF03"
                    label="Cantidad"
                    type="number"
                    outlined
                    required
                  ></v-text-field>
                   <div>
                    <v-label>Precio</v-label>
                    <v-text-field v-model="precio" variant="outlined"></v-text-field>
                  </div>  
                  </v-col>
                </div>      
              </div>
              <div class="d-flex mx-2 justify-center">
                <div>
                  <v-label>Nombre</v-label>
                  <v-text-field v-model="nombre" variant="outlined"></v-text-field>
                </div>
                <div>
                  <v-label>Precio</v-label>
                  <v-text-field v-model="precio" variant="outlined"></v-text-field>
                </div>
                <div>
                  <v-label>Cantidad</v-label>
                  <v-text-field v-model="cantidad" variant="outlined"></v-text-field>
                </div>
                <div>
                  <v-label>SubTotal</v-label>
                  <v-text-field v-model="subtotal" variant="outlined"></v-text-field>
                </div>
                <div>
                  <v-label>Total</v-label>
                  <v-text-field v-model="subtotal" variant="outlined"></v-text-field>
                </div>
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="red darken-1"
                  @click="ventaDialog = false"
                >
                  Cancelar
                </v-btn>
                <v-btn
                  color="green darken-1"
                  @click="saveSale({ nombre, precio, cantidad, subtotal })"
                >
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </v-layout>
  </v-container>
</template>

<script>
//url de los articulos
const url = "http://localhost:3000/api"
//uso de axios, libreria que permite hacer peticiones a una API, HTTP
import axios from 'axios'

export default {
  name: 'ventas',
  //siempre declarar un data
  data() {
    return {
      ventaDialog :false,
      ventaComidaDialog:false,
      ventaProductDialog: false,
      ventas: [],
      products: [],
      nombre: '',
      precio: null,
      cantidad: null,
      subtotal: null
    }
  },
  //para generar o crear métodos
  methods: {
    //metodo para obtener los productos
    loadProducts() {
      // then y catch son propiedades de una PROMESA
      axios.get(url+ "/ventas")
      // en caso de que la respuesta sea correcta
      .then(response => {
        //primer data respuesta de axios
        //segundo data es respuesta de la api
        this.ventas = response.data.data;
        console.log(this.ventas)
        
      })
      // en caso de que ocurra un error al hacer la petición
      .catch((error) => {
        console.log(error);
      })
    },
    //metodo para hacer la búsqueda del producto por su código
    loadProductByBarCode(search) {
      axios.get(url + `/articulos?page=1&limit=10&search=${search}`)
      .then(response => {
        console.log(response);
        this.products = response.data.data
      })
      .catch(response => {
        console.log(response);
      })
    },
    selectProduct(product) {
      this.nombre = product.nombre
      this.precio = product.precio_venta
      this.cantidad = product.stock
      this.subtotal = parseFloat(product.precio_venta) * parseInt(product.stock)
    },
    saveSale(product) {
      console.log(`Save sale ${product.nombre}`);
      this.ventaComidaDialog = false
    },
    saveProductSale(product) {
      this.ventaProductDialog = false
    }
  },
  //para ejecutar tus métodos
  //montar tus métodos o funciones
  mounted() {
    this.loadProducts()
  }
}
</script>
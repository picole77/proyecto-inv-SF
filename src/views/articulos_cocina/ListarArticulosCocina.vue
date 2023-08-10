<template>
  <div>
    <v-container id="listar" fluid tag="section">
        <div>
          <v-container>
            <v-row no-gutters >
              <v-col>
              <v-btn tyle color="#F3AA60" to="/articulos_cocina/crearcomida">
                <v-icon left>mdi-cart-outline</v-icon>
                  Crear Comida
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
          </div>
      
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              #ID
            </th>
            <th class="primary--text">
              Codigo de Barras
            </th>
            <th class="primary--text">
              Producto
            </th>
            <th class="primary--text">
              Precio
            </th>
            <th class="primary--text">
              Stock
            </th>
            <th class="primary--text">
              Caducidad
            </th>
            <th class="primary--text">
              Entregó
            </th>
            <th class="primary--text">
              Recibió
            </th>
            <th class="primary--text">
              Imagen
            </th>
            <th class="primary--text">
              Opciones
            </th>
          </tr>
        </thead>

        <tbody class="font-weight-bold">
          <tr v-for="articulo in articulos" :key="articulo.id">
            <td>{{ articulo.id }}</td>
            <td>{{ articulo.codigo_barras}}</td>
            <td>{{ articulo.producto }}</td>
            <td>{{ articulo.precio }}</td>
            <td>{{ articulo.stock }}</td>
            <td>{{ articulo.caducidad }}</td>
            <td>{{ articulo.usuario }}</td>
            <td>{{ articulo.cliente }}</td>
            <td><img :src='url+articulo.imagen' :alt="articulo.nombre" width="80"></td>
            <td>
              <v-btn :to="{ name: 'editar', params: { id: articulo.id } }" fab small
                color="light-blue"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn @click.stop="dialog = true" @click=" id = articulo.id" fab small
                color="orange darken-4"><v-icon>mdi-delete</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>

      <v-dialog v-model="dialog" max-whidth="350">
        <v-card>
          <v-card-title class="headline">¿Desea eliminar el registro?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <V-btn @click="dialog = false">Cancelar</V-btn>
            <V-btn @click="confirmarBorrado(id)" color="error">Aceptar</V-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>
<script>
let url = 'http://localhost:3000/api/';
const imageURL = "http://localhost:3000/products/"
import axios from 'axios';
export default {
  name: 'listar',
  mounted() {
    this.obtenerArticulos();
  },
  data() {
    return {
      dialog: false,
      url: imageURL,
      articulos:[]
    }
  },
  methods: {
    obtenerArticulos() {
      axios.get(`${url}cocina?page=1&limit=25`)
        .then(response => {
          this.articulos = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    confirmarBorrado(id) {
      axios.delete(url + id)
        .then(() => {
          this.obtenerArticulos();
          this.dialog = false;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>
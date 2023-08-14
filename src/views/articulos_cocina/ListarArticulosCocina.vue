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
              Comida
            </th>
            <th class="primary--text">
              Descripción
            </th>
            <th class="primary--text">
              Precio
            </th>
            <th>
              Fecha
            </th>
            <th class="primary--text text-center">
              Opciones
            </th>
          </tr>
        </thead>

        <tbody class="font-weight-bold">
          <tr v-for="comida in cocina" :key="comida.id">
            <td>{{ comida.id }}</td>
            <td>{{ comida.nombre}}</td>
            <td>{{ comida.descripcion }}</td>
            <td>{{ comida.precio }}</td>
            <td>{{ comida.created_at }}</td>
            <td>
              <v-btn :to="{ name: 'editar', params: { id: comida.id } }" fab small
                color="light-blue"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn @click.stop="dialog = true" @click=" id = comida.id" fab small
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
      cocina:[]
    }
  },
  methods: {
    obtenerArticulos() {
      axios.get(`${url}articulos/cocina?page=1&limit=25`)
        .then(response => {
          this.cocina = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    confirmarBorrado(id) {
      axios.delete(`${url}/cocina/eliminar` + id)
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
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
        <v-toolbar-title>Inventario de Cocina</v-toolbar-title>
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
    <v-btn to="/articulos/crear" fab darck color="#00c853"><v-icon>mdi-plus</v-icon></v-btn>
    
      <h5 >Agregar Articulo</h5>
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
            <th class="text-right primary--text">
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
            <td>{{ articulo.precio }}</td>
            <td>{{ articulo.stock }}</td>
            <td>{{ articulo.caducidad }}</td>
            <td>{{ articulo.usuario }}</td>
            <td>{{ articulo.cliente }}</td>
            <td>{{ articulo.imagen }}</td>
            <td>
              <v-btn :to="{name:'editar', params:{id:articulo.id}}" fab small color="light-blue"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn @click.stop="dialog=true" @click=" id=articulo.id" fab small color="orange darken-4"><v-icon>mdi-delete</v-icon></v-btn>
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
import axios from 'axios';
export default{
  name:'listar',
  mounted(){
    this.obtenerArticulos();
  },
  data(){
    return{
      dialog: false,
      articulos:[]
    }
  },
  methods:{
    obtenerArticulos(){
      axios.get(`${url}cocina?page=1&limit=25`)
      .then(response => {
        this.articulos = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      })
   },
   confirmarBorrado(id){
    axios.delete(url+id)
    .then(()=>{
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
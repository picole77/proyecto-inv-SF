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
          <v-toolbar-title>Inventario general</v-toolbar-title>

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
    <v-flex>
      <v-label>Crear Articulo</v-label>
      <v-btn to="/articulos/crear" fab darck color="#00c853">
        <v-icon >mdi-plus</v-icon>
      </v-btn>
    </v-flex>
    <v-flex>
      <v-label>Transpaso</v-label>
      <v-btn to="/articulos/crear" fab darck color="#00c853">
        <v-icon >mdi-plus</v-icon>
      </v-btn>
    </v-flex>
  
    <base-material-card icon="mdi-clipboard-text" height="80px"
      title="Simple Table" 
      class="px-5 py-3">
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
            <td>
              <v-btn :to="{name:'editar_articulo', params:{id:articulo.id}}" fab small color="light-blue"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn @click.stop="dialog=true" @click="id=articulo.id" fab small color="orange darken-4"><v-icon>mdi-delete</v-icon></v-btn>
              <v-btn color="primary" dark @click.stop="cocinaDialog=true" fab small> <v-icon>mdi-basket</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
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
              max-width="400"
              label="Código de barras"
            >a</v-text-field>
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
      cocinaDialog: false,
      articulos:null
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
          timer: 1000
        })
        
      })
   }
  }
}
</script>
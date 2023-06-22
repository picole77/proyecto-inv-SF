<template>
<div>
  <v-card class="pa-4" flat height="20px">
      
    </v-card>
  
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

  <v-btn to="/articulos/crear" fab darck color="#00c853">
    <v-icon >mdi-plus</v-icon>
  </v-btn>
    
      <base-material-card icon="mdi-clipboard-text" height="80px"
      title="Simple Table" 
      class="px-5 py-5">
      <h5 >agregar articulo</h5>
      <v-simple-table >
        <thead height="80px">
          <tr class="text-subtitle-8">
            <th class="primary--text">
              ID
            </th>
            <th class="primary--text">
              Descripcion
            </th>
            <th class="primary--text">
              Precio
            </th>
            <th class="primary--text">
              Stock
            </th>
            <th class="text-right primary--text">
              Acciones
            </th>
          </tr>
        </thead>

        <tbody class="font-weight-bold">
          <tr v-for="articulo in articulos" :key="articulo.id">
            <td>{{ articulo.id }}</td>
            <td>{{ articulo.descripcion}}</td>
            <td>{{ articulo.precio.toFixed(2)}}</td>
            <td>{{ articulo.stock }}</td>


            <td>
              <v-btn :to="{name:'editar', params:{id:articulo.id}}" fab small color="light-blue"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn @click.stop="dialog=true" @click=" id=articulo.id" fab small color="orange darken-4"><v-icon>mdi-delete</v-icon></v-btn>
            </td>


          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

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
let url = 'http://localhost:3000/api/articulos?page=1&limit=25';
import axios from 'axios';
export default{
  name:'listar',
  mounted(){
    this.obtenerArticulos();
  },
  data(){
    return{
      dialog: false,
      articulos:null
    }
  },
  methods:{
    obtenerArticulos(){
      axios.get(url)
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
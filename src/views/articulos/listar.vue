<template>
<div>
  <v-container id="listar" fluid tag="section">
  <v-btn to="/articulos/crear" fab darck color="#00c853"><v-icon>mdi-plus</v-icon></v-btn>
    
      <base-material-card icon="mdi-clipboard-text" 
      title="Simple Table" 
      class="px-5 py-3">
      <v-simple-table>
        <thead>
          <tr>
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

        <tbody>
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
let url = 'http://localhost:3000/api/articulos/';
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
      this.articulos = response.data;
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
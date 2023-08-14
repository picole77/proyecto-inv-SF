<template>
   <div>
     <v-container>
          <v-row no-gutters >
            <v-col>
              <v-btn to="/articulos/crear" tyle color="#00c853">
                <v-icon left>mdi-plus</v-icon>
                Nuevo usuario
              </v-btn>
            </v-col>
            <v-col>
              <v-btn tyle color="#F3AA60" @click.stop="">
                <v-icon left>mdi-cart-outline</v-icon>
                Usuarios
              </v-btn>
            </v-col>
            <v-col>
              <v-btn tyle color="#525FE1" @click.stop="">
                <v-icon left>mdi-exit-to-app</v-icon>
                Roles
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
              Nombre Completo
            </th>
            <th class="primary--text">
              Usuario
            </th>
            <th class="primary--text">
              Email
            </th>
            <th class="primary--text">
              Rol
            </th>
            <th class="primary--text">
              Status
            </th>
            <th class="primary--text">
              Imagen
            </th>
            <th class="text-right primary--text">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" v-bind:key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nombre_completo }}</td>
            <td>{{ usuario.nombre_usuario }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.rol_id }}</td>
            <td>{{ usuario.estatus }}</td>
            <td>
              <img :src='url+usuario.imagen' :alt="usuario.nombre_usuario">
            </td>
            <td>
              <v-btn fab small color="light-blue"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn fab small color="orange darken-4"><v-icon>mdi-delete</v-icon></v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
   </div>
  
</template>
<script>
  const url = "http://localhost:3000/api/"
  let imageURL = "http://localhost:3000/images/"
  import axios from 'axios'
  import VueSimpleAlert from 'vue-simple-alert'

  export default {
    data() {
      return {
        usuarios: [],
        url: imageURL
      }
    },
    mounted() {
      this.showUsers()
    },
    methods: {
      showUsers() {
        axios.get(`${url}usuarios`)
        .then(response => {
          this.usuarios = response.data.data
        })
        .catch(error => {
          VueSimpleAlert.fire({
            title: 'Error',
            text: 'Ocurrió un error al obtener la lista de usuarios',
            type: 'error',
            timer: 1500
          })
        })
      }
    }
  }
</script>

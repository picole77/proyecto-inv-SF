<template>
  <v-container>
    <div>
      <v-container>
        <v-row no-gutters>
          <v-col>
            <v-btn @click="createUserDialog = true" tyle color="#00c853">
              <v-icon left>mdi-plus</v-icon>
              Nuevo usuario
            </v-btn>
          </v-col>
          <!-- <v-col>
            <v-btn tyle color="#F3AA60" @click.stop="">
              <v-icon left>mdi-cart-outline</v-icon>
              Usuarios
            </v-btn>
          </v-col> -->
          <v-col>
            <v-btn tyle color="#525FE1" @click="createRolDialog = true">
              <v-icon left>mdi-exit-to-app</v-icon>
              Roles
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-simple-table>
        <thead height="80px">
          <tr class="text-subtitle-8">
            <th class="primary--text">ID</th>
            <th class="primary--text">Nombre Completo</th>
            <th class="primary--text">Usuario</th>
            <th class="primary--text">Email</th>
            <th class="primary--text">Rol</th>
            <th class="primary--text">Status</th>
            <th class="primary--text">Imagen</th>
            <th class="text-right primary--text">Acciones</th>
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
              <img :src="url + usuario.imagen" width="80" :alt="usuario.nombre_usuario" />
            </td>
            <td>
              <v-btn fab small color="light-blue"
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
              <v-btn fab small color="orange darken-4"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
      <v-dialog class="mt-5 mx-4" v-model="createUserDialog" max-width="600">
        <v-card>
          <v-card-title class="headline">Creación de Usuario</v-card-title>
          <v-form @submit.prevent="createUser" enctype="multipart/form-data">
            <v-row class="justify-start mx-4">
              <v-col class="d-flex"
              cols="12"
              sm="12">
                  <v-text-field
                    class="w-50"
                    label="Nombre Completo"
                    name="nombre_completo"
                    prepend-icon="person"
                    type="text"
                    v-model="form.nombre_completo"
                    color="teal accent-3"
                  />
              </v-col>
              <v-col class="d-flex" cols="12" sm="12">
                <v-text-field
                  label="Nombre de Usuario"
                  name="nombre_usuario"
                  prepend-icon="person"
                  type="text"
                  v-model="form.nombre_usuario"
                  color="teal accent-3"
                />
              </v-col>
              <v-col class="d-flex"
              cols="12" sm="6">
                <v-text-field
                  label="Correo Electrónico"
                  name="email"
                  prepend-icon="email"
                  v-model="form.email"
                  type="email"
                  color="teal accent-3"
                />
              </v-col>
              <v-col class="d-flex"
              cols="12" sm="6">
                <v-text-field
                  label="Contraseña"
                  name="Password"
                  prepend-icon="lock"
                  type="password"
                  v-model="form.password"
                  color="teal accent-3"
                />
              </v-col>
              <v-col class="d-flex"
              cols="12" sm="6">
                <v-select
                  @change="selectRol(roles.id)"
                  v-model="roles"
                  :items="items"
                  item-text="type"
                  item-value="id"
                  prepend-icon="account-key-online"
                  density="compact"
                  name="rol"
                  return-object
                  label="Roles de ususario"
                ></v-select>
              </v-col>
              <v-col class="d-flex"
              cols="12" sm="6">
                <v-text-field
                  label="Numero de Teléfono"
                  name="numero_telefono"
                  prepend-icon="phone"
                  type="number"
                  v-model="form.numero_telefonico"
                  color="teal accent-3"
                />
              </v-col>
              <v-col class="d-flex"
              cols="12" sm="6">
                <v-text-field
                  label="Dirección"
                  name="address"
                  prepend-icon="directions"
                  type="text"
                  v-model="form.address"
                  color="teal accent-3"
                />
              </v-col>
              <v-col class="d-flex"
              cols="12" sm="6">
                <v-file-input
                  label="Imagen de usuario"
                  name="imagen"
                  v-model="form.image"
                  accept="image/*"
                  @onchange="uploadImage($event.target.files)"
                >
                </v-file-input>
              </v-col>
              <v-col>
                <v-alert
                  dismissible
                  prominent
                  :value="visible"
                  :type="types"
                >{{ alert_message }}</v-alert>
              </v-col>
              <v-col class="d-flex"
              cols="12" sm="12">
                <div class="text-center mt-1">
                  <v-btn
                    type="submit"
                    class="font-weight-black my-3"
                    elevation="1"
                    rounded
                    color="lime accent-4"
                    >Crear Usuario</v-btn>
                  <v-btn
                    rounded
                    class=""
                    @click="createUserDialog = false"
                    color="danger"
                  >Cancelar</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-dialog>
      <v-dialog class="mt-5 mx-4" v-model="createRolDialog" max-width="400">
        <v-card>
          <v-card-title class="headline">Crear Rol</v-card-title>
          <v-form @submit.prevent="createRol">
            <v-row class="justify-start mx-4">
              <v-col>
                <v-alert
                  dismissible
                  prominent
                  :value="visible"
                  :type="types"
                >{{ alert_message }}</v-alert>
              </v-col>
              <v-col class="d-flex"
              cols="12" sm="12">
              <v-text-field
                    class="w-50"
                    label="Rol"
                    name="tipo_usuario"
                    prepend-icon="person"
                    type="text"
                    v-model="tipo_usuario"
                    color="teal accent-3"
                  />
              </v-col>
              <v-col class="d-flex align-center"
              cols="12" sm="12">
                <v-btn
                  type="submit"
                  class="font-weight-black my-3"
                  elevation="1"
                  rounded
                  color="lime accent-4"
                >Guardar</v-btn>
                <v-btn
                  rouded
                  color="danger"
                  @click="createRolDialog = false"
                >Cancelar</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-dialog>
  </v-container>
</template>
<script>
const url = "http://localhost:3000/api/";
let imageURL = "http://localhost:3000/images/";
import axios from "axios";
import VueSimpleAlert from "vue-simple-alert";

export default {
  data() {
    return {
      usuarios: [],
      url: imageURL,
      visible: false,
      types: 'error',
      alert_message: '',
      createUserDialog: false,
      createRolDialog: false,
      tipo_usuario: null,
      items: [
                {'type':'Administrador general', 'id': 1},
                {'type':'Jefe de Inventario', 'id': 2},
                {'type': 'Usuario','id': 3}
            ],
      roles: null,
      form: {
        nombre_completo: null,
        nombre_usuario: null,
        email: null,
        password: null,
        numero_telefonico: null,
        address: null,
        image: ''
      }
    };
  },
  mounted() {
    this.showUsers();
  },
  methods: {
    showAlert() {
      // self.visible = true
      // self.types = 'success'

      setTimeout(function() {
        self.visible = false
        // self.$router.go(0)
      }, 3000)
    },
    showUsers() {
      let self = this
      axios
        .get(`${url}usuarios`)
        .then((response) => {
          self.showAlert()
          this.usuarios = response.data.data;
        })
        .catch((error) => {
          VueSimpleAlert.fire({
            title: "Error",
            text: "Ocurrió un error al obtener la lista de usuarios",
            type: "error",
            timer: 1500,
          });
        });
    },
    createUser: async function() {
      let url = 'http://localhost:3000/'
      let self = this

      let formData = new FormData();
      this.form.image_name = this.form.image.name
      // console.log(this.form.image_name);
      formData.append('file', this.form.image)
      formData.append('nombre_completo', this.form.nombre_completo)
      formData.append('nombre_usuario', this.form.nombre_usuario)
      formData.append('rol', this.form.rol)
      formData.append('email', this.form.email)
      formData.append('password', this.form.password)
      formData.append('numero_telefonico', this.form.numero_telefonico)
      formData.append('address', this.form.address)
      
      await axios.post(`${url}register`,formData)
      .then(function(response) {
          // console.log(response);
          if(response.data.status) {
            self.visible = true
            self.types = 'success'
            self.alert_message = 'Creado Exitosamente'
            setTimeout(function() {
              self.$router.go(0)
            }, 3000)
          }
              
      })
      .catch(function (error) {
          console.log(error);
          const errorMessage = error.response.data.message
          self.visible = false
          self.types = 'error'
          self.alert_message = errorMessage
          setTimeout(function() {
            self.$router.go(0)
          }, 3000)
      })
    },
    selectRol(id) {
        console.log(id);
        this.form.rol = id
    },
    createRol() {
      const tipo_usuario = {
        "tipo_usuario": this.tipo_usuario
      }
      const self = this
      axios.post(`${url}rol/crear`, tipo_usuario)
      .then( function() {
        self.visible = true
        self.types = 'success'
        self.alert_message = 'Creado Exitosamente'
        setTimeout(function() {
          self.$router.go(0)
        }, 3000)
      })
      .catch( error => {
        self.visible = false
        self.types = 'error'
        self.alert_message = error.message
        setTimeout(function() {
          self.$router.go(0)
        }, 3000)
      })
    }
  },
};
</script>

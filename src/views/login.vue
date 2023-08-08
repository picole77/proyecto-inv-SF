<template>
    <v-app>
        <v-main class="background">
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center"> 
                    <v-col cols="12" sm="6" md="4">
                        <v-card class="elevation-5">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12" md="12">
                                            <v-card-text class="my-1 mt-0">
                                                <v-col cols="12">
                                                    <v-img
                                                        :src="require('../assets/cropped-logo-eric.webp')"
                                                        class="my-1"
                                                        contain
                                                        height="150"/>
                                                </v-col>
                                                <h4 class="text-center   font-weight-black  text-h5 teal--text text--light-blue-darken-" 
                                                color="">Login</h4>
                                                <v-form @submit.prevent="login"> 
                                                    <h4 class="text-center mt-1 teal--text text--light-blue-darken-1">ingrese usuario y password</h4>
                                                    
                                                    <v-text-field
                                                        label="Nombre de usuario"
                                                        name="nombre_usuario"
                                                        prepend-icon="person"
                                                        type="text"
                                                        v-model="nombre_usuario"
                                                        color="teal accent-3"
                                                    />
                                                   <!-- <v-text-field
                                                    label="Email" 
                                                    name="email" 
                                                    prepend-icon="email"
                                                    type="text"
                                                    color="teal accent-3"/> -->
                                                    <v-text-field
                                                        id="password"
                                                        label="Password"
                                                        name="Password"
                                                        prepend-icon="lock"
                                                        type="password"
                                                        v-model="password"
                                                        color="teal accent-3"
                                                    />
                                                    <div class="text-center my-1">
                                                        <v-btn class="font-weight-black my-3" elevation="1" type="submit" rounded color="lime accent-4">Iniciar Sesión</v-btn>
                                                    </div>
                                                </v-form>
                                            </v-card-text>

                                        </v-col>
                                        
                                        <v-col cols="12" md="12" class="teal primary">
                                            <h1 class="text-center mt-1 white--text text--light-blue-darken-4">Crear Cuenta</h1>
                                            <div class="text-center mt-1">
                                                <v-btn class="font-weight-black my-3" elevation="1" rounded color="lime accent-4"   @click="step++">Registrate</v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>

                                <v-window-item :value="2">
                                    <v-row class="fill-height"> 
                                        <v-col cols="12" my="1">
                                            <v-card-text class="my-1">
                                                <v-col cols="12">
                                                    <v-img
                                                        :src="require('../assets/cropped-logo-eric.webp')"
                                                        class="my-1"
                                                        contain
                                                        height="150"/>
                                                </v-col> 
                                                <h3 class="text-center   font-weight-black  text-h3 teal--text text--light-blue-darken-" >Crear Cuenta</h3>
                                                
                                                <h4 class="text-center mt-3 font-weight-black teal--text text--light-blue-darken-4">Ingresar datos para registrarse</h4>
                                                <v-form @submit.prevent="register" enctype="multipart/form-data">
                                                    <v-text-field
                                                    label="Nombre Completo"
                                                    name="nombre_completo"
                                                    prepend-icon="person"
                                                    type="text"
                                                    v-model="form.nombre_completo"
                                                    color="teal accent-3"/>

                                                    <v-text-field
                                                    label="Nombre de Usuario"
                                                    name="nombre_usuario"
                                                    prepend-icon="person"
                                                    type="text"
                                                    v-model="form.nombre_usuario"
                                                    color="teal accent-3"/>

                                                    <v-text-field
                                                    label="Correo Electrónico"
                                                    name="email"
                                                    prepend-icon="email"
                                                    v-model="form.email"
                                                    type="email"
                                                    color="teal accent-3"/>

                                                    <v-text-field
                                                        label="Contraseña"
                                                        name="Password"
                                                        prepend-icon="lock"
                                                        type="password"
                                                        v-model="form.password"
                                                        color="teal accent-3"
                                                    />
                                                    
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

                                                    <v-text-field
                                                        label="Numero de Teléfono"
                                                        name="numero_telefono"
                                                        prepend-icon="phone"
                                                        type="number"
                                                        v-model="form.numero_telefonico"
                                                        color="teal accent-3"
                                                    />

                                                    <v-text-field 
                                                        label="Dirección"
                                                        name="address"
                                                        prepend-icon="directions"
                                                        type="text"
                                                        v-model="form.address"
                                                        color="teal accent-3"
                                                    />

                                                    <v-file-input 
                                                    label="Imagen de usuario"
                                                    name="imagen"
                                                    v-model="form.image"
                                                    accept="image/*"
                                                    @onchange="uploadImage($event.target.files)"
                                                    >
                                                    </v-file-input>

                                                    <div class="text-center mt-1"> 
                                                        <v-btn type="submit" class="font-weight-black my-3" elevation="1" rounded color="lime accent-4">Crear Cuenta</v-btn>
                                                    </div>
                                                </v-form>
                                            </v-card-text>
                                            <div class="text-center mt-1">
                                                <v-label>¿Ya tienes cuenta?</v-label>
                                                <v-btn class="font-weight-black my-3" elevation="1" rounded color="indigo accent-4"   @click="step--">Iniciar Sesión</v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main> 
    </v-app>
</template>

<script>
import axios from 'axios';
// vue simple alert
import VueSimpleAlert from 'vue-simple-alert'

export default {
    name: 'Login',
    data: function () {
        return {
            items: [
                {'type':'Administrador general', 'id': 1},
                {'type':'Jefe de Inventario', 'id': 2},
                {'type': 'Usuario','id': 3}
            ],
            roles: null,
            step: 1,
            nombre_usuario: '',
            password: '',
            form: {
                nombre_completo: '',
                email: '',
                nombre_usuario: '',
                rol: 3,
                password: '',
                numero_telefonico: '',
                address: '',
                image: null,
                image_name: ''
            }
        }

    },
    
    props: {
        source: String
    },
    methods: {
        login: async function() {
            let url = 'http://localhost:3000/login'
            let optionThis = this

            await axios.post(url, {
                nombre_usuario: this.nombre_usuario,
                password: this.password
            })
            .then(function (response) {
                // get a session response
                const session = JSON.stringify(response.data.session)
                // save into local storage
                localStorage.setItem("session", session)
                // insert event login to event bus
                optionThis.$bus.$emit('logged', 'User logged')
                // confirm login
                VueSimpleAlert.fire({
                    title: 'Acceso Correcto',
                    text: 'Se ha logueado correctamente',
                    type: 'success',
                    timer: 1500
                }).then( () => { optionThis.$router.push('/') })
                // redirect to list articulos
                
            })
            .catch(function (error) {
                // console.log(error);
                const errorMessage = error.response.data.message

                VueSimpleAlert.fire({
                    title: 'Error',
                    text: `${errorMessage}`,
                    type: 'error',
                    timer: 1500
                })
            });
            
        },
        uploadImage(files) {
            this.form.image = files[0]
        },
        register: async function() {
            let url = 'http://localhost:3000/register'
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
            
            await axios.post(url,formData)
            .then(function(response) {
                // console.log(response);
                if(response.data.status) {
                    VueSimpleAlert.fire({
                        title: 'Registrado',
                        text: 'Se ha registrado correctamente',
                        type: 'success',
                        timer: 1500
                    }).then( () =>  self.$router.push('/login'))
                }
                    
            })
            .catch(function (error) {
                console.log(error);
                const errorMessage = error.response.data.message
                
                VueSimpleAlert.fire({
                    title: 'Error',
                    text: `${errorMessage}`,
                    type: 'error',
                    timer: 1500
                })
            })
        },
        selectRol(id) {
            console.log(id);
            this.form.rol = id
        }
    }
    
}
</script>

<style scoped>
main {
    background-image: url('@/assets/comida.jpeg');
    background-size:cover;
}
</style>

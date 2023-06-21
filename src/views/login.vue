<template>
    <v-app>
        <v-content class="bacgraund">
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
                                                color="">login</h4>
                                                
                                             
                                               <!-- <h1 class="text-center mt-2 teal--text text--light-blue-darken-1 " 
                                                color="#795548">¡Bienvenido! </h1> -->
                                                
                                                  <!--<div class="text-center" mt-4>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-facebook-f</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-google-plus-g</v-icon>
                                                    </v-btn>
                                                    <v-btn class="mx-2" fab color="black" outlined>
                                                        <v-icon>fab fa-linkedin-in</v-icon>
                                                    </v-btn>
                                                </div> -->
                                                <v-form> 
                                                    <h4 class="text-center mt-1 teal--text text--light-blue-darken-1">ingrese usuario y password</h4>
                                                    
                                                    <v-text-field
                                                    label="Nombre de ususario"
                                                    name="name"
                                                    prepend-icon="person"
                                                    type="text"
                                                    color="teal accent-3"/>

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
                                                    color="teal accent-3"/>
                                                </v-form>
                                            </v-card-text>

                                            <div class="text-center my-1">
                                                <v-btn class="font-weight-black my-3" elevation="1" rounded color="lime accent-4">Iniciar Sesión</v-btn>
                                            </div>
                                        </v-col>
                                        
                                        <v-col cols="12" md="12" class="teal primary">
                                                <h1 class="text-center mt-1 white--text text--light-blue-darken-4">crear cuenta</h1>
                                            <div class="text-center mt-1">

                                                <v-btn class="font-weight-black my-3" elevation="1" rounded color="lime accent-4"   @click="step++">Registrate</v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>

                                <v-window-item :value="2">
                                    <v-row class="fill-height"> 
                                        <v-col cols="12" my="1">
                                            <v-card-text class="my-1">" 
                                                <h3 class="text-center   font-weight-black  text-h3 teal--text text--light-blue-darken-" >crear cuenta</h3>
                                                
                                                <h4 class="text-center mt-3 font-weight-black teal--text text--light-blue-darken-4">ingresar datos para registrarse</h4>
                                                <v-form>
                                                    <v-text-field
                                                    label="Crear Nombre de Usuario"
                                                    name="name"
                                                    prepend-icon="person"
                                                    type="text"
                                                    color="teal accent-3"/>
                                                    <!-- <v-text-field
                                                    label="Email"
                                                    name="Email"
                                                    prepend-icon="email"
                                                    type="text"
                                                    color="teal accent-3"/> -->
                                                    <v-text-field
                                                    label="Crear Password"
                                                    name="Password"
                                                    prepend-icon="lock"
                                                    type="password"
                                                    color="teal accent-3"/>
                                                </v-form>
                                            </v-card-text>
                                            <div class="text-center mt-1"> 
                                                <v-btn class="font-weight-black my-3" elevation="1" rounded color="lime accent-4">Crear Cuenta</v-btn>
                                            </div>
                                        </v-col>
                                                    >
                                               
                                            
                                            
                                        
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>

            </v-container>
        </v-content> 
    </v-app>
</template>

<script>
export default {
        data: ()=>({
            step: 1
        }),
        props: {
            source: String
        }
    
    }
</script>

<style scoped>
main {
  background-image: url('@/assets/comida.jpeg');
  background-size:cover;
}
</style>

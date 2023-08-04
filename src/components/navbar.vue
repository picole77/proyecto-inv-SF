<template>
    <v-app-bar
    app
    color="primary"
    dark
    >
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/cropped-logo-eric.webp"
        transition="scale-transition"
        width="90"
      />
    </div>
    <v-spacer></v-spacer>
    <div>
    <!-- <router-link to="/login">
      <v-btn target ="_blank" text> 
        <span class="font-weight-black">Login</span>
      </v-btn>
    </router-link> -->
    <router-link to="/">
      <v-btn  target="_blank" text>
        <span class="font-weight-black">Inicio</span>
      </v-btn>
    </router-link>
    <router-link to="/articulos/listar">
      <v-btn target ="_blank" text >
        <span class="font-weight-black">Almacen</span>
      </v-btn>
    </router-link>
    <router-link to="/articulos-cocina/listar">
      <v-btn target ="_blank" text >
        <span class="font-weight-black">Cocina</span>
      </v-btn>
    </router-link>
    <router-link to="/ventas">
      <v-btn target ="_blank" text >
        <span class="font-weight-black">Ventas</span>
      </v-btn>
    </router-link>
    <router-link to="/reportes">
      <v-btn  target="_blank" text>
        <span class="font-weight-black">Reportes</span>
      </v-btn>
    </router-link>
    
    <v-btn
    @click="logout()"
    >Cerrar Sesión</v-btn>
    </div>
    </v-app-bar>
</template>
<script>
export default {
    name: 'navbar',
    data() {
        return {
            isLogged: this.checkIfIsLogged(),
            user: ''
        }
    },
    methods: {
        checkIfIsLogged() {
            const session = localStorage.getItem('session')

            return session ? true : false;
        },
        logout() {
            // remove session
            localStorage.removeItem('session')
            // redirect to login
            this.$router.push('/login')
        },
        existUser() {
            const session = localStorage.getItem('session')
            //parse to json
            const parse = JSON.parse(session)
            //insert value into user
            this.user = parse.nombre_usuario
        }
    },
    created() {
        this.$bus.$on('logged', () => {
            this.isLogged = this.checkIfIsLogged()
        })
    },
    mounted() {
        this.existUser()
    }
}
</script>

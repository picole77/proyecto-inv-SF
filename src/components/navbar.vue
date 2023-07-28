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
        src="../assets/cropped-logo-eric.webp"
        transition="scale-transition"
        width="90"
      />
    </div>
    <v-spacer></v-spacer>
    <div>
    <!-- <router-link to="/">
      <v-btn target ="_blank" text> 
        <span class="font-weight-black">Login</span>
      </v-btn>
    </router-link> -->
    <router-link to="/dashboard">
      <v-btn  target="_blank" text>
        <span class="font-weight-black">Inicio</span>
      </v-btn>
    </router-link>
    <router-link to="/listar-articulos">
      <v-btn target ="_blank" text >
        <span class="font-weight-black">Almacen</span>
      </v-btn>
    </router-link>
    <router-link to="/listar-articulos-cocina">
      <v-btn target ="_blank" text >
        <span class="font-weight-black">Cocina</span>
      </v-btn>
    </router-link>
    <router-link to="/ventas">
      <v-btn target ="_blank" text >
        <span class="font-weight-black">Ventas</span>
      </v-btn>
    </router-link>
    <router-link to="/recibo">
      <v-btn  target="_blank" text>
        <span class="font-weight-black">Reportes</span>
      </v-btn>
    </router-link>
    <router-link to="/calendario">
      <v-btn  target="_blank" text>
        <span class="font-weight-black">Calendario</span>
      </v-btn>
    </router-link>
    </div>
    </v-app-bar>
</template>
<script>
export default {
    name: 'navbar',
    data() {
        return {
            isLogged: this.checkIfIsLogged()
        }
    },
    methods: {
        checkIfIsLogged() {
            const session = localStorage.getItem('session')

            return session ? true : false;
        }
    },
    created() {
        this.$bus.$on('logged', () => {
            this.isLogged = this.checkIfIsLogged()
        })
    }
}
</script>

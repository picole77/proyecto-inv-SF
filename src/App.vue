<template>
  <v-app>
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
          src="./assets/cropped-logo-eric.webp"
          transition="scale-transition"
          width="40"
        />

    
      </div>
      <v-spacer></v-spacer>
      <div>

      <router-link to="/">
      <v-btn  color="#primary" text> 
        <span class="mr-2"><v-icon icon="md:home"></v-icon>login</span>
      </v-btn>
    </router-link>

      <router-link to="/seguridad">
      <v-btn target ="_blank" text >
        <span class="mr-2">seguridad</span>
      </v-btn>
    </router-link>

    <router-link to="/dash">
      <v-btn  target="_blank" text>
        <span class="mr-2">inicio</span>
      </v-btn>
    </router-link>

    <router-link to="/src/views/articulos/listar.vue">
      <v-btn target ="_blank" text >
        <span class="mr-2">inventario</span>
      </v-btn>
    </router-link>
    
    <router-link to="/ventas">
      <v-btn target ="_blank" text >
        <span class="mr-2">ventas</span>
      </v-btn>
    </router-link>

    <router-link to="/reporte">
      <v-btn target ="_blank" text >
        <span class="mr-2">reporte</span>
      </v-btn>
    </router-link>
  </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

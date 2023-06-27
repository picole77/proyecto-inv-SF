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
          width="90"
        />

    
      </div>
      <v-spacer></v-spacer>
      <div>

      <router-link to="/">
      <v-btn  target ="_blank" text> 
        <span   class="font-weight-black">login</span>
      </v-btn>
    </router-link>

      

    

    <router-link to="/listar-articulos">
      <v-btn target ="_blank" text >
        <span class="font-weight-black">Inventario General</span>
      </v-btn>
    </router-link>
    
    
    
    <router-link to="/listar-articulos-cocina">
      <v-btn target ="_blank" text >
        <span class="font-weight-black">Inventario Cocina</span>
      </v-btn>
    </router-link>
    
    <router-link to="/ventas">
      <v-btn target ="_blank" text >
        <span class="font-weight-black">Ventas</span>
      </v-btn>
    </router-link>

    <router-link to="/reporte">
      <v-btn target ="_blank" text >
        <span class="font-weight-black">Reportes</span>
      </v-btn>
    </router-link>
    
    <router-link to="/dashboard">
      <v-btn  target="_blank" text>
        <span class="font-weight-black">Inicio</span>
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


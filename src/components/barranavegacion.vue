<template>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            :src="require('../assets/cropped-logo-eric.webp')"
            class="my-3"
            contain
            height="200"
          />
        </v-col>
      
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
          Bienvenidos al sistema de inventario
          </h1>
        </v-col>
  
        <v-col
          class="mb-5"
          cols="12"
        >
          <h2 class="headline font-weight-bold mb-3">
            Con este sistema nos ayudas con el buen funcionamiento y mejora del servicio de nuestra cafetería 
            y control de inventarios.
          </h2>
        </v-col>
      </v-row> 
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'inicio',
    }
  </script>
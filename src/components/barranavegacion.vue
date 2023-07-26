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
          bien venidos, al sistema de inventario
          </h1>
        </v-col>
  
        <v-col
          class="mb-5"
          cols="12"
        >
          <h2 class="headline font-weight-bold mb-3">
            con este sistema nos ayudas con el buen funcionamiento y mejora del servicio de nuestra cafeteria 
            y control de inventarios
          </h2>
        </v-col>
          </v-row> 

  
    <v-card>
      <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>


    </v-container>
  </template>
  
  <script>
  import { calendarComponent } from '@syncfusion/ej2-vue-calendars';
    export default {
      name: 'inicio',
  
      data: () => ({
        ecosystem: [
        ],
        importantLinks: [
          {
            text: 'Documentation',
            href: 'https://vuetifyjs.com',
          },
          {
            text: 'Chat',
            href: 'https://community.vuetifyjs.com',
          },

        ],
        whatsNext: [
        ],
      }),
    }
  </script>
<template>
  <v-card>
    <div>
     <h1>Venta</h1>
    </div>
    
    <v-card-title>
      <v-layout align-start justify-start row>
      <v-sheet :class="model" max-width="200" 
        class="mx-auto mt-2"
        elevation="10"
        height="50"
        width="20%">
        <v-text-field v-model="search" append-icon="search" label="ID Producto" single-line hide-details></v-text-field>
      </v-sheet>

       <v-sheet :class="model" max-width="200" 
          class="mx-auto mt-1"
          elevation="10"
          height="50"
          width="20%">
         <v-card dark color="white">
              <v-card-text class="px-0">descripcion</v-card-text>
            </v-card>
        </v-sheet>
         <v-sheet :class="model" max-width="200" 
            class="mx-auto mt-1"
            elevation="10"
            height="50"
            width="20%">
           <v-card dark color="white">
                <v-card-text class="px-0">3</v-card-text>
              </v-card>
          </v-sheet>
       <v-sheet :class="model" max-width="200" 
        class="mx-auto mt-1"
        elevation="10"
        height="50"
        width="20%">
        <v-text-field v-model="search" append-icon="search" label="ID Venta" single-line hide-details></v-text-field>
      </v-sheet> 
      
       <v-sheet :class="model" max-width="200" 
            class="mx-auto mt-1"
            elevation="10"
            height="50"
            width="20%">
           <v-card dark color="white">
                <v-card-text class="px-1">3</v-card-text>
              </v-card>
          </v-sheet>
           <v-sheet :class="model" max-width="200" 
            class="mx-auto mt-1"
            elevation="10"
            height="50"
            width="20%"
            >
           <v-card dark color="white">
                <v-card-text class="px-0">3</v-card-text>
              </v-card>
          </v-sheet>
      <v-spacer></v-spacer>  
    </v-layout>
    </v-card-title>

   <template>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  <template>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-table>
    </template>
    <template>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in desserts"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </v-table>
    </template>
    
  
    <v-spacer></v-spacer>
    <div class="d-flex justify-space-around mb-6 bg-surface-variant mx-auto " >
      <v-btn color="success" class="mt-2 font-weight-black">Guardar</v-btn>
      
      <v-btn color="error" class="mt-2 font-weight-black">Cancelar</v-btn>
     
      <v-btn color="info" class="mt-2 font-weight-black">Imprimir</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
    }
  },
}
</script>
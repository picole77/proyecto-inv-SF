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
        <v-text-field v-model="search" append-icon="search" label="ID Venta" single-line hide-details></v-text-field>
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
   
    
    <v-data-table :headers="headers" :items="desserts" :search="search">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
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
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  }
}
</script>
<template>
  <v-card>
    <div>
     <h1>Venta</h1>
    </div>
    <div>
      <template>
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-combobox
              v-model="value"
              :items="items"
              label="Default"
            ></v-combobox>
          </v-col>
          <v-col cols="12">
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </template>
    </div>
    
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
    <v-spacer></v-spacer>
    <div class="d-flex justify-space-around mb-6 bg-surface-variant mx-auto " >
      <v-btn color="success" class="mt-2 font-weight-black">Guardar</v-btn>
      <v-btn color="error" class="mt-2 font-weight-black">Cancelar</v-btn>
      <v-btn color="info" class="mt-2 font-weight-black">Imprimir</v-btn>
    </div> 
    <recibo />
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
import recibo from './recibo.vue';
</script>
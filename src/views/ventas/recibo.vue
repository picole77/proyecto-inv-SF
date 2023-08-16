<template>
  <v-form class="mt-5">
    <v-container>
      <v-row>
        <v-col
        class="d-flex align-center"
        cols="12"
        md="2"
        >
          <v-label class="mt-4"><strong>Almacen</strong></v-label>
        </v-col>
        <v-col
          class="d-flex align-center justify-center gap-2"
          cols="12"
          md="8"
        >
          <v-text-field
            class="mx-2"
            label="Fecha de ingreso"
            hint="MM/DD/YYYY format"
            type="date"
            v-model="almacen.start_date"
            outlined
            required
          ></v-text-field>
          <v-text-field
            class="mx-2"
            label="Fecha de ingreso"
            hint="MM/DD/YYYY format"
            type="date"
            v-model="almacen.end_date"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        md="2"
        >
          <v-btn :to="{name: 'detalles_almacen', params:{ name: 'Almacen',start_date: almacen.start_date, end_date: almacen.end_date }}" class="info">Ver</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        class="d-flex align-center"
        cols="12"
        md="2"
        >
          <v-label class="mt-4"><strong>Cocina</strong></v-label>
        </v-col>
        <v-col
          class="d-flex align-center justify-center gap-2"
          cols="12"
          md="8"
        >
          <v-text-field
            class="mx-2"
            label="Fecha de ingreso"
            hint="MM/DD/YYYY format"
            type="date"
            v-model="cocina.start_date"
            outlined
            required
          ></v-text-field>
          <v-text-field
            class="mx-2"
            label="Fecha de ingreso"
            hint="MM/DD/YYYY format"
            type="date"
            v-model="cocina.end_date"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        md="2"
        >
          <v-btn :to="{name: 'detalles_cocina', params:{ name: 'Cocina',start_date: cocina.start_date, end_date: cocina.end_date }}" class="info">Ver</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
        class="d-flex align-center"
        cols="12"
        md="2"
        >
          <v-label class="mt-4"><strong>Ventas</strong></v-label>
        </v-col>
        <v-col
          class="d-flex align-center justify-center gap-2"
          cols="12"
          md="8"
        >
          <v-text-field
            class="mx-2"
            label="Fecha de ingreso"
            hint="MM/DD/YYYY format"
            type="date"
            v-model="venta.start_date"
            outlined
            required
          ></v-text-field>
          <v-text-field
            class="mx-2"
            label="Fecha de ingreso"
            hint="MM/DD/YYYY format"
            type="date"
            v-model="venta.end_date"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        md="2"
        >
          <v-btn :to="{name: 'detalles_reporte', params:{ name: 'Ventas',start_date: venta.start_date, end_date: venta.end_date }}" class="info">Ver</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      venta: {
        start_date: null,
        end_date: new Date().toISOString().split('T')[0]
      },
      almacen: {
        start_date: null,
        end_date: new Date().toISOString().split('T')[0]
      },
      cocina: {
        start_date: null,
        end_date: new Date().toISOString().split('T')[0]
      }
    }
  }
}
</script>
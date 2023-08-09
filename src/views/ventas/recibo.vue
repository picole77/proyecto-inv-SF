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
            outlined
            required
          ></v-text-field>
          <v-text-field
            class="mx-2"
            label="Fecha de ingreso"
            hint="MM/DD/YYYY format"
            type="date"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        md="2"
        >
          <v-btn class="info">Generar</v-btn>
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
            outlined
            required
          ></v-text-field>
          <v-text-field
            class="mx-2"
            label="Fecha de ingreso"
            hint="MM/DD/YYYY format"
            type="date"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        md="2"
        >
          <v-btn class="info">Generar</v-btn>
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
            outlined
            required
          ></v-text-field>
          <v-text-field
            class="mx-2"
            label="Fecha de ingreso"
            hint="MM/DD/YYYY format"
            type="date"
            outlined
            required
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        md="2"
        >
          <v-btn class="info">Generar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
}
</script>
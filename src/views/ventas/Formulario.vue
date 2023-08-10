<template>
  <div class="mx-6">
    <v-card>

    </v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field color="#76FF03" label="Fecha de caducidad" hint="MM/DD/YYYY format" type="date" name="caducidad"
        outlined required></v-text-field>


      <div class=" ">
        <v-select v-model="select" :items="tipocliente" :rules="[v => !!v || 'Item is required']" label="tipo de Cliente"
          required></v-select>

        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>

        <v-select v-model="select" :items="tipoventas" :rules="[v => !!v || 'Item is required']" label="tipo de venta"
          required></v-select>

       <v-layout class="overflow-visible" style="height: 56px;">
             <v-col>
            
                <v-btn tyle color="#00c853" to="/ventas/Formventpro">
                  <v-icon left>mdi-cart-outline</v-icon>
                  Realiar una nueva venta
                </v-btn>

                 <v-btn tyle color="#F3AA60" to="/ventas/Ventcomida">
                    <v-icon left>mdi-cart-outline</v-icon>
                    Realiar una nueva venta
                  </v-btn>
         
              </v-col>
          <v-container>
        </v-container>
      </v-layout>
      </div>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      '1 piezas',
      '2 piezas',
      '3 piezas',
      '4 piezas',
    ],
    itemproducto: [
      'coca cola',
      'mirinda',
      'pan bimbo',
      'galletas oreo',
    ],
    select: null,
    tipocliente: [
      'Cliente Interno',
      'Cliente Externo',
    ],
    tipoventas: [
      'Venta',
      'Cortesia',
    ],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>
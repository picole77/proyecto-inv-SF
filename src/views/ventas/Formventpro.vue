<template>
   <div class="mx-5">
    
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field color="#76FF03"
                          label="Fecha de caducidad"
                          hint="MM/DD/YYYY format"
                          type="date"
                          name="caducidad"
                          outlined
                          required
                      ></v-text-field>

        
                <div class=" ">
                <v-select v-model="select" :items="tipocliente" :rules="[v => !!v || 'Item is required']" label="tipo de Cliente" required></v-select>

    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>

     <v-select v-model="select" :items="tipoventas" :rules="[v => !!v || 'Item is required']" label="tipo de venta" required></v-select>

     <v-select v-model="select" :items="itemproducto" :rules="[v => !!v || 'Item is required']" label="seleccione producto" required></v-select>

    

     <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Cantidad" required></v-select>

    <div>
    <v-label>Precio</v-label>
    <v-text-field v-model="precio" variant="outlined"></v-text-field>
    </div>

    

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      agregar
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Cancelar
    </v-btn>
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
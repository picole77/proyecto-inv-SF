<template>
   <div mx-5>
    
  <v-form ref="form" v-model="valid" lazy-validation>
     <v-select v-model="select" :items="itemcomida" :rules="[v => !!v || 'Item is required']" label="seleccione tipo de comida" required></v-select>

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
      '1 porciones',
      '2 porciones',
      '3 porciones',
      '4 porciones',
      '5 porciones',
      '6 porciones',
      '7 porciones',
      '8 porciones',
    ],
     itemcomida: [
      'enchiladas verdes',
       'enfrijoladas',
      'entomatadas',
      'tasajo a la Mexicana',
      'huevos a la Mexicana',
      'huevos con jamon',
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
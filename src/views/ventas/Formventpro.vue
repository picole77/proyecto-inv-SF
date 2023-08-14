<template>
  <div class="mx-5 mt-5">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="date"
        color="#76FF03"
        label="Fecha de caducidad"
        hint="MM/DD/YYYY format"
        type="date"
        name="fecha"
        outlined
        required
      ></v-text-field>

      <div class="">
        <v-select
        @change="selectTypeClient(tipo_cliente)"
          v-model="tipo_cliente"
          :items="tipocliente"
          item-text="tipo_cliente"
          item-value="id"
          return-object
          :rules="[(v) => !!v || 'Item is required']"
          label="Tipo de Cliente"
          name="tipo_cliente"
          required
        ></v-select>

        <!-- <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Nombre"
          required
        ></v-text-field> -->

        <v-select
          @change="selectTypeSale(tipo_venta)"
          v-model="tipo_venta"
          :items="tipoventas"
          :rules="[(v) => !!v || 'Item is required']"
          label="Tipo de venta"
          name="tipo_venta"
          required
        ></v-select>

        <v-select
          @change="selectProduct(producto.id)"
          v-model="producto"
          :items="itemproducto"
          item-text="nombre"
          item-value="id"
          return-object
          name="producto"
          :rules="[(v) => !!v || 'Item is required']"
          label="seleccione producto"
          required
        ></v-select>

        <v-select
          v-model="cantidad"
          :items="items_products"
          item-text="nombre"
          item-value="id"
          return-object  
          :rules="[(v) => !!v || 'Item is required']"
          label="Cantidad"
          name="cantidad"
          required
        ></v-select>

        <div>
          <v-label>Precio</v-label>
          <v-text-field v-model="precio" outlined variant="outlined"></v-text-field>
        </div>
        <div class="mt-2 mx-2">
          <h5>Alimentos</h5>
          <v-select 
          @change="selectProductCocina(item_comida.id)"
          v-model="item_comida" 
          :items="itemcomida"
          item-text="nombre"
          item-value="id"
          return-object
          name="item_comida" 
          label="seleccione tipo de comida" 
          required></v-select>
  
          <v-select 
          v-model="item_cantidad" 
          :items="items"
          item-text="nombre"
          item-value="id"
          return-object   
          label="Cantidad"
          name="item_cantidad" 
          required></v-select>
          <div>
            <v-label>Precio</v-label>
            <v-text-field v-model="item_precio" variant="outlined"></v-text-field>
          </div>
        </div>

        <v-btn :disabled="!valid" color="info" class="mr-4" @click="validate">
          Agregar
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Cancelar
        </v-btn>
      </div>
      <div class="mt-4 d-flex justify-center align-items-center">
        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="saveProducts()"
          >
            Realizar venta
        </v-btn>
        <v-btn color="error" class="mr-4" to="/ventas">Cancelar</v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import axios from 'axios';
import VueSimpleAlert from 'vue-simple-alert';
const url = "http://localhost:3000/api/"

export default {
  data: () => ({
    date: new Date().toISOString().split('T')[0],
    temp_list_products: [],
    client_id: null,
    tipo_cliente: null,
    tipo_venta: null,
    precio: null,
    valid: true,
    cantidad: null,
    producto: null,
    usuario: null,
    total: 0,
    name: "",
    email: "",
    checkbox: false,
    select: null,
    item_cantidad: null,
    item_comida: null,
    item_precio: null,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    items_products: [{id: 1, nombre:"1 piezas"}, {id: 2,nombre:"2 piezas"}, {id: 3,nombre:"3 piezas"}, {id: 4,nombre:"4 piezas"}],
    itemproducto: [],
    tipocliente: [],
    tipoventas: ["Venta", "Cortesia"],
    items: [ 
      {
        id: 1,
        nombre: '1 porciones'
      },
      {
        id: 2,
        nombre: '2 porciones'
      },
      {
        id: 3,
        nombre: '3 porciones'
      },
      {
        id: 4,
        nombre: '4 porciones'
      },
      {
        id: 5,
        nombre: '5 porciones'
      },
      {
        id: 6,
        nombre: '6 porciones'
      },
      {
        id: 7,
        nombre: '7 porciones'
      },
      {
        id: 8,
        nombre: '8 porciones'
      }
    ],
    itemcomida: [],
    tipoventas: [
      'Venta',
      'Cortesia',
    ],
  }),
  mounted() {
    this.showProducts()
    this.showProductsCocina()
    this.showTypeClient()
    this.usuario = this.loadUser()
  },
  methods: {
    selectProduct(id) {
      // find element into array using id
      const producto = this.itemproducto.find(item => item.id === id)
      this.precio = producto.precio_venta
    },
    selectProductCocina(id) {
      const cocinaProduct = this.itemcomida.find(item => item.id === id)
      this.item_precio = cocinaProduct.precio
    },
    selectTypeClient(type) {
      console.log(type);
      this.tipo_cliente = type.tipo_cliente
      this.client_id = type.id
    },
    selectTypeSale(type) {
      console.log(type);
      this.tipo_venta = type
    },
    validate() {
      let self = this
      if(this.producto !== null && this.cantidad !== null && this.precio !== null) {
        this.temp_list_products.push({
          "product_id": this.producto.id,
          "cantidad": this.cantidad.id,
          "amount": this.precio
        })
        this.total += (this.cantidad.id * this.precio)
        VueSimpleAlert.fire({
          title: 'Agregado',
          text: 'Se ha agregado el producto',
          type: 'info',
          timer: 1500
        })
      }

      if(this.item_comida !== null && this.item_cantidad !== null && this.item_precio !== null) {
        this.temp_list_products.push({
          "product_id": this.item_comida.id,
          "cantidad": this.item_cantidad.id,
          "amount": this.item_precio
        })

        this.total += (this.item_cantidad.id * this.item_precio)

        VueSimpleAlert.fire({
          title: 'Agregado',
          text: 'Se ha agregado el producto',
          type: 'info',
          timer: 1500
        }).then( () => {
          window.location.reload()
        })
      }

    },
    loadUser() {
      const session = localStorage.getItem('session')

      if(session !== null) {
        const parseUserSession = JSON.parse(session)

        return parseUserSession.id
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    saveProducts() {
      let self = this
      if(this.$refs.form.validate() ){
        const form = {
          "tipo_venta": self.tipo_venta,
          "tipo_cliente": self.tipo_cliente,
          "productos": this.temp_list_products,
          "fecha": this.date,
          "usuario_id": this.usuario,
          "client_id": this.client_id,
          "total": this.total ?? 0
        }

        axios.post(`${url}ventas/registrar`, form)
        .then( (response) => {
          VueSimpleAlert.fire({
            title: 'Venta realizada',
            text: `${response.data.message}`,
            type: 'success'
          }).then( () => {
            self.$router.push('/ventas')
          })
        })
        .catch( (error) => {
          VueSimpleAlert.fire({
            title: 'Error',
            text: 'Ah ocurrido un error al tratar de realizar la venta',
            type: 'error',
            timer: 1500
          })
        })
      }
    },
    showProductsCocina() {
      axios.get(`${url}articulos/cocina`)
      .then(response => {
        this.itemcomida = response.data.data
      })
      .catch(error => {
        VueSimpleAlert.fire({
          title: 'Error',
          text: 'Ocurrió un error al obtener los productos de comida',
          type: 'error',
          timer: 1500
        })
      })
    },
    showProducts() {
      axios.get(`${url}articulos?page=1&limit=25`)
      .then(response => {
        this.itemproducto = response.data.data
      })
      .catch(error => {
        VueSimpleAlert.fire({
          title: 'Error',
          text: 'Ocurrió un error al obtener los productos',
          type: 'error',
          timer: 1500
        })
      })
    },
    showTypeClient() {
      axios.get(`${url}clientes?page=1&limit=25`)
      .then(response => {
        this.tipocliente = response.data.data
      })
    }
  },
};
</script>

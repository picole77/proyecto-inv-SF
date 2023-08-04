<template>
    <v-container>
        <v-row>
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">Editar Articulo</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <form @submit.prevent="guardarArticulo" enctype="multipart/form-data">
                    <v-text-field color="#76FF03" v-model="articulo.codigo_barras"
                    label="Código de Barras"
                    outlined
                    required
                    >
                    </v-text-field>
                    <v-text-field v-model="articulo.nombre"
                    label="Nombre"
                    outlined
                    required
                    ></v-text-field>
                    <v-text-field v-model="articulo.descripcion"
                    label="Descripción"
                    outlined
                    required
                    ></v-text-field>
                    <v-text-field v-model="articulo.precio_compra"
                    label="Precio de compra"
                    outlined
                    prefix="$"
                    required
                    >
                    </v-text-field>
                    <v-text-field v-model="articulo.precio_venta"
                    label="Precio de venta"
                    outlined
                    prefix="$"
                    required
                    >
                    </v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.caducidad"
                        label="Fecha de caducidad"
                        hint="MM/DD/YYYY format"
                        type="date"
                        outlined
                        required
                    ></v-text-field>
                    <v-text-field v-model="articulo.stock"
                    label="stock"
                    outlined
                    type="number"
                    required
                    >
                    </v-text-field>
                    <v-card-actions>
                        <v-btn  to="/articulos/listar" color="#FF5722" class="mr-4">Cancelar</v-btn>
                        <v-btn type="submit" color="#00C853" class="mr-4">Guardar</v-btn>
                    </v-card-actions>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
let url = 'http://localhost:3000/api/articulos/';
import axios from 'axios';
import VueSimpleAlert from 'vue-simple-alert';

export default{
    name:'editar',
    mounted() {
        this.id = this.$route.params.id;
        axios.get(url+this.id)
        .then(response=>{
            this.articulo=response.data.data[0];
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    data() {
        return{
            id:null,
            articulo:{
                codigo_barras: '',
                nombre: '',
                descripcion:'',
                precio_compra:'',
                precio_venta: '',
                stock:''
            }
        }
    },
    methods: {
        guardarArticulo: async function() {
            let router = this.$router;
            let params = this.articulo;
            await axios.put(url+this.id, params) 
            .then((response)=>{
                // console.log(response.data);
                if(response.data.status) {
                    VueSimpleAlert.fire({
                        title: 'Actualizado',
                        text: response.data.message,
                        type: 'success'
                    }).then( () => router.push('/articulos/listar'))
                }
            })
            .catch((error)=>{
                console.log(error)
                VueSimpleAlert.fire({
                    title: 'Error',
                    text: 'A ocurrido un error al actualizar el producto',
                    type: 'error',
                    timer: 1500
                })
            })   
        }
    }
}
</script>
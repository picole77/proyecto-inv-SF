<template>
   
    <v-container>
        <v-row>
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">Registrar nuevo articulo</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <form  @submit.prevent="guardarArticulo" enctype="multipart/form-data">
                    <v-text-field color="#76FF03" v-model="articulo.codigo_barras"
                    label="Código de Barras"
                    outlined
                    required
                    >
                    </v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.nombre"
                    label="Nombre"
                    outlined
                    required
                    ></v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.descripcion"
                    label="Descripción"
                    outlined
                    required
                    ></v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.precio_compra"
                    label="Precio de compra"
                    outlined
                    prefix="$"
                    required
                    >
                    </v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.precio_venta"
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
                    <v-text-field color="#76FF03" v-model="articulo.stock"
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
    name:'crear',
    data(){
        return{
            articulo:{
                codigo_barras: '',
                nombre: '',
                descripcion:'',
                precio_compra:'',
                precio_venta: '',
                caducidad: '',
                stock:''
            }
        };
    },
    methods: {
        guardarArticulo: async function() {
            let router = this.$router; 
            // console.log(router);
            let params = this.articulo;

            axios.post(url, params)
            .then((response)=>{
                if(response.data.status) {
                        VueSimpleAlert.fire({
                            title: 'Creado',
                            text: response.data.message,
                            type: 'success'
                        }).then( () => router.push('/articulos/listar'))
                    }
            }) 
            .catch((error)=>{
                console.log(error);
            })
        }
    }
}
</script>
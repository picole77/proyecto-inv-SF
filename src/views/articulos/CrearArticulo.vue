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
                    name="codigo_barras"
                    outlined
                    required
                    >
                    </v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.nombre"
                    label="Nombre"
                    name="nombre"
                    outlined
                    required
                    ></v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.descripcion"
                    label="Descripción"
                    name="descripcion"
                    outlined
                    required
                    ></v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.precio_compra"
                    label="Precio de compra"
                    name="precio_compra"
                    outlined
                    prefix="$"
                    required
                    >
                    </v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.precio_venta"
                    label="Precio de venta"
                    name="precio_venta"
                    outlined
                    prefix="$"
                    required
                    >
                    </v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.caducidad"
                        label="Fecha de caducidad"
                        hint="MM/DD/YYYY format"
                        type="date"
                        name="caducidad"
                        outlined
                        required
                    ></v-text-field>
                    <v-text-field color="#76FF03" v-model="articulo.stock"
                        label="stock"
                        outlined
                        type="number"
                        name="stock"
                        required
                    >
                    </v-text-field>
                    <v-file-input 
                        label="Imagen de usuario"
                        name="imagen"
                        v-model="articulo.file"
                        accept="image/*"
                        @onchange="uploadImage($event.target.files)"
                    >
                    </v-file-input>
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
                stock:'',
                file: null
            }
        };
    },
    methods: {
        guardarArticulo: async function() {
            let router = this.$router; 
            // console.log(router);
            // let params = this.articulo;

            let formData = new FormData()

            formData.append("file",this.articulo.file)
            formData.append('codigo_barras', this.articulo.codigo_barras)
            formData.append('nombre', this.articulo.nombre)
            formData.append('descripcion', this.articulo.descripcion)
            formData.append('precio_compra', this.articulo.precio_compra)
            formData.append('precio_venta', this.articulo.precio_venta)
            formData.append('caducidad', this.articulo.caducidad)
            formData.append('stock', this.articulo.stock)

            axios.post(url, formData)
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
        },
        uploadImage(files) {
            this.articulo.file = files[0]
        }
    }
}
</script>
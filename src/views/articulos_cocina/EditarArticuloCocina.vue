<template>
    <v-container>
        <v-row>
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">Editar articulo</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <form  v-on:submit.prevent="guardarArticulo()">
                    <v-text-field color="#76FF03" v-model="articulo.descripcion"
                    label="descripción"
                    outlined
                    required
                    >
                    </v-text-field>

                    <v-text-field color="#4CAF50" v-model="articulo.precio"
                    label="precio"
                    outlined
                    type="number"
                    prefix="$"
                    required
                    >
                    </v-text-field>

                    <v-text-field color="red" v-model="articulo.stock"
                    label="stock"
                    outlined
                    type="number"
                    required
                    >
                    </v-text-field>
                    <v-card-actions>
                        <v-btn  to="/src/views/articulos/listar.vue" color="#FF5722" class="mr-4">cancelar</v-btn>
                        <v-btn to="/src/views/articulos/listar.vue" type="submit" color="#00C853" class="mr-4">guardar</v-btn>
                    </v-card-actions>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
let url = 'http://localhost:3000/api/articulos/';
import axios from 'axios';

export default{
    name:'editar',
    mounted(){
        this.id = this.$route.params.id;
        axios.get(url+this.id)
        .then(response=>{
            this.articulo=response.data[0];
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    data(){
        return{
            id:null,
            articulo:{
                descripcion:'',
                precio:'',
                stok:''
            }
        }
    },
    methods:{
        guardarArticulo(){
        let router = this.$router;
        let params = this.articulo;
        axios.put(url+this.id, params) 
        .then(()=>{
            router.push('/articulos');
        })
        .catch((error)=>{
            console.log(error)
        })   
     }
    }}
</script>
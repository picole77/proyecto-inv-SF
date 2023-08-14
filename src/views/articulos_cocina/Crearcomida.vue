<template>
    <v-container>
        <v-row>
            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">Registrar nueva comida</h1>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <form  v-on:submit.prevent="guardarComida()">
                   
                    <v-text-field color="#76FF03" v-model="comida.nombre"
                        label="nombre"
                        outlined
                        required
                        >
                        </v-text-field>
                    <v-text-field color="#76FF03" v-model="comida.descripcion"
                    label="descripción"
                    outlined
                    required
                    >
                    </v-text-field>

                    <v-text-field color="#4CAF50" v-model="comida.precio"
                    label="precio de venta"
                    outlined
                    type="number"
                    prefix="$"
                    required
                    >
                    </v-text-field>

                    
                    <v-card-actions>
                        <v-btn  to="/articulos-cocina/listar" color="#FF5722" class="mr-4">Cancelar</v-btn>
                        <v-btn type="submit" color="#00C853" class="mr-4">Guardar</v-btn>
                    </v-card-actions>
                </form>
            </v-col>
        </v-row>
       
    </v-container>
 
</template>

<script>
let url = 'http://localhost:3000/api/articulos/cocina/crear';
import axios from 'axios';
import VueSimpleAlert from 'vue-simple-alert';
export default{
    name:'crear',
    data(){
        return{
            comida:{
                nombre:'',
                descripcion:'',
                precio:''
            }
        };
    },
    methods:{
        guardarComida(){
            let router = this.$router; 
            
            let params = this.comida;
            axios.post(url, params)
            .then(()=>{
                VueSimpleAlert.fire({
                    title: 'Registrado Correctamente',
                    text: 'Se ha registrado la comida correctamente',
                    type:'success'
                }).then(()=>{
                    router.push('/articulos-cocina/listar');
                })
            }) 
            .catch((error)=>{
                VueSimpleAlert.fire({
                    title: 'Error',
                    text: 'Ah ocurrido un error al realizar el registro',
                    type:'error'
                }).then(()=>{
                    router.push('/articulos-cocina/listar');
                })
            })
        }
    }
}
</script>

<template>
    <v-container>
        <v-row>
            <v-col><h1>{{ name }}</h1></v-col>
        </v-row>
        <v-simple-table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Fecha</th>
                    <th>Tipo de Venta</th>
                    <th>Tipo Cliente</th>
                    <th>Total</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="venta in ventas" :key="venta.id">
                    <td>{{ venta.id }}</td>
                    <td>{{ venta.fecha }}</td>
                    <td>{{ venta.tipo_venta }}</td>
                    <td>{{ venta.tipo_cliente }}</td>
                    <td>{{ venta.total }}</td>
                    <td>
                        <v-btn :to="{name: 'pdf_ventas', params: {id: venta.id }}" fab small color="info"><v-icon>mdi-printer</v-icon></v-btn>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-container>
</template>
<script>

import axios from 'axios';

const url = "http://localhost:3000/api/"

export default {
    name: 'detalles_reporte',
    data() {
        return {
            ventas: [],
            start_date: null,
            end_date: null,
            name: 'Reporte'
        }
    },
    mounted() {

        const currentDate = new Date()
        
        const formatDate = `${currentDate.getFullYear()}-${("0" + (currentDate.getMonth() + 1)).slice(-2)}-${("0" + currentDate.getDate()).slice(-2)}`

        this.start_date = this.$route.params.start_date ?? formatDate
        this.end_date = this.$route.params.end_date ?? formatDate
        this.name = this.$route.params.name

        this.showSale(this.start_date, this.end_date)
    },
    methods: {
        showSale(first_date, second_date) {
            axios.post(`${url}ventas/dates?first_date=${first_date}&second_date=${second_date}`)
            .then(response => {
                console.log(response);
                if(response.data.status) {
                    this.ventas = response.data.data
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>
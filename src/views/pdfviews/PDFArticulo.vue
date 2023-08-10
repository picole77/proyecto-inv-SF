<template>
    <!-- <vue-pdf-embed :source="pdfsrc"></vue-pdf-embed> -->
</template>
<script>
import axios from 'axios'
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
const url = "http://localhost:3000/api/"

export default {
    name: 'pdf_articulo',
    data() {
        return {
            id: null,
            pdfsrc: null
        }
    },
    components: {
        VuePdfEmbed
    },
    mounted() {
        this.id = this.$route.params.id
        this.printSale(this.id)
    },
    methods: {
        printSale(id) {
            console.log(id);
            let self = this
            axios.get(`${url}pdf/almacen/${id}`, {responseType: 'blob'})
            .then(response => {
                console.log(response);
                window.open(URL.createObjectURL(response.data))
                // self.pdfsrc = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        },
    }
}
</script>
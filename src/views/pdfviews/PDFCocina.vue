<template>
    <vue-pdf-app :pdf="pdfsrc" @open="openHandler" theme="dark"></vue-pdf-app>
</template>
<script>
import axios from 'axios'
import VuePdfApp from 'vue-pdf-app'
const url = "http://localhost:3000/api/"

export default {
    name: 'pdf_cocina',
    data() {
        return {
            id: null,
            pdfsrc: null
        }
    },
    components: {
        VuePdfApp
    },
    mounted() {
        this.id = this.$route.params.id
        this.printSale(this.id)
    },
    methods: {
        openHandler(pdfApp) {
            window._pdfApp = pdfApp
        },
        printSale(id) {
            let self = this
            axios.get(`${url}pdf/cocina/${id}`, {responseType: 'blob'})
            .then(response => {
                // console.log(response);
                let reader = new FileReader()
                reader.readAsDataURL(response.data)
                reader.onloadend = function() {
                    const base64data = reader.result
                    self.pdfsrc = base64data
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
    }
}
</script>
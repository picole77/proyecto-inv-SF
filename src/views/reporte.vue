<template>
<title>factura</title>
<h2>Factura</h2>

<body>
  numero id <br><input type="text" name="ideCliente" id="idCliente" placeholder="idCliente"><input/>
</body>
</template>
<script setup>
var idCliente;
var nombreCliente;
var descripcionProducto;
var precio;
var cantidad;
var total;
var subtotal;
var iva;
var fecha;
var imprimir;
var numFactura;
var p = 0;
var subtotalP = 0;

function generarFactura() {
  idCliente = document.getElementById("idCliente").ariaValueMax;
  descripcionProducto = document.getElementById("nombreCliente").ariaValueMax;


  document.write(fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear);
  document.write("identificacion del cliente:c" + nombreCliente + "<br>" + "<br>");
  document.write("nombre del cliente:" + '&nbsp' + nombreCliente + "<br>" + "<br>");

for (subtotal = 0; descripcionProducto != "*"; subtotal++) {
  descripcionProducto = prompt('ingrese el nombre del producto');
  document.write("descricion del producto: " + '&nbsp;' + descripcionProducto + '&nbsp;');

  precio = parseFloat(prompt('ingrese precio'));
  document.write("precio: " + '&nbsp;' + precio + '&nbsp;' + '&nbsp;');

  cantidad = parseInt(prompt('ingrese cantidad'));
  document.write("cantidad: " + '&nbsp;' + '&bnsp');

  descripcionProducto = prompt('ingrese "*" para terminar o cualquier tecla para continuar');

  subtotal = precio * cantidad;
  subtotalP = subtotalP + parseInt(subtotal);
  iva = subtotalP + iva;

  document.write("subtotla : " + '&nbsp;' + subtotal + "<br>" + "<br>" + "<br>");

}

document.write("subtotal : " + '&nbsp;' + subtotalP + "<br>" + "<br>");
document.write("Iva 16% :" + '&nbsp;' + iva + "<br>" + "<br>");
document.write("Total :" + '&nbsp' + total + "<br>" + "<br>");
document.write('<button onclick="window.print()">imprimir factura</button>');
}
generarFactura()
</script>
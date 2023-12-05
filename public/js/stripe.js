// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Ahora puedes acceder a la variable global definida en el archivo EJS
    const cantidad = document.getElementById("cantidad-input");
    const price = window.precioProducto;

    // Ahora puedes utilizar la variable "price" en tu script
    console.log("El precio del producto es:", price);
});

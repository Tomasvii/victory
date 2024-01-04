const precio = document
    .getElementById("totalAmount")
    .innerText.replace("$", "");

function incrementarCantidad() {
    var cantidadElement = document.getElementById("cantidad2");
    var cantidad = parseInt(cantidadElement.innerText);
    cantidad++;
    cantidadElement.innerText = cantidad;
    actualizarTotal();
}

function incrementarCantidad2() {
    var cantidadElement = document.getElementById("cantidad3");
    var cantidad = parseInt(cantidadElement.innerText);
    cantidad++;
    cantidadElement.innerText = cantidad;
    actualizarTotal2();
}

function decrementarCantidad() {
    var cantidadElement = document.getElementById("cantidad2");
    var cantidad = parseInt(cantidadElement.innerText);
    if (cantidad > 1) {
        cantidad--;
        cantidadElement.innerText = cantidad;
        actualizarTotal();
    }
}

function decrementarCantidad2() {
    var cantidadElement = document.getElementById("cantidad3");
    var cantidad = parseInt(cantidadElement.innerText);
    if (cantidad > 1) {
        cantidad--;
        cantidadElement.innerText = cantidad;
        actualizarTotal2();
    }
}

function actualizarTotal() {
    var cantidad = parseInt(document.getElementById("cantidad2").innerText);
    var nuevoTotal = cantidad * precio;

    document.getElementById("totalAmount").innerText = nuevoTotal.toFixed(2);
}

function actualizarTotal2() {
    var cantidad = parseInt(document.getElementById("cantidad3").innerText);
    var nuevoTotal = cantidad * precio;

    document.getElementById("totalAmount2").innerText = nuevoTotal.toFixed(2);
}

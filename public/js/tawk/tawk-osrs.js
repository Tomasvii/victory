var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/654000bea84dd54dc486d725/1he105qoq";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
})();

function comprar() {
    const cantidad = document.getElementById("cantidad-input").value;
    const personaje = document.getElementById("personaje-input").value;
    const metodo = document.getElementById("pago-input").value;
    const entrega = document.getElementById("entrega-input").value;
    const cantidad2 = document.getElementById("cantidad-input2").value;
    const personaje2 = document.getElementById("personaje-input2").value;
    const metodo2 = document.getElementById("pago-input2").value;
    const entrega2 = document.getElementById("entrega-input2").value;

    if (
        cantidad != false &&
        personaje != false &&
        metodo != "-Seleccionar-" &&
        entrega != "-Seleccionar-"
    ) {
        window.Tawk_API.maximize();
        window.Tawk_API.setAttributes({
            name:
                "Cantidad: " +
                cantidad +
                "k     \nPersonaje: " +
                personaje +
                "     \nMétodo de pago: " +
                metodo +
                "     \nMétodo de entrega: " +
                entrega,
        });
        const comprar = document.getElementById("comprar");
        comprar.innerHTML = "<strong>ACTUALIZAR</strong>";
    } else if (
        cantidad2 != false &&
        personaje2 != false &&
        metodo2 != "-Seleccionar-" &&
        entrega2 != "-Seleccionar-"
    ) {
        window.Tawk_API.maximize();
        window.Tawk_API.setAttributes({
            name:
                "Cantidad: " +
                cantidad2 +
                "k     \nPersonaje: " +
                personaje2 +
                "     \nMétodo de pago: " +
                metodo2 +
                "     \nMétodo de entrega: " +
                entrega2,
        });
        const comprar = document.getElementById("comprar");
        comprar.innerHTML = "<strong>ACTUALIZAR</strong>";
    }
}

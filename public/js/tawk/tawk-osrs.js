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

async function comprar() {
    const game = document.getElementById("juegoInput")
        ? document
              .getElementById("juegoInput")
              .options[
                  document.getElementById("juegoInput").selectedIndex
              ].getAttribute("data-name")
        : null;
    const game2 = document.getElementById("juegoInput2")
        ? document
              .getElementById("juegoInput2")
              .options[
                  document.getElementById("juegoInput2").selectedIndex
              ].getAttribute("data-name")
        : null;
    const cantidad = document.getElementById("cantidad-input").value;
    const cantidad2 = document.getElementById("cantidad-input2").value;
    const personaje = document.getElementById("personaje-input").value;
    const personaje2 = document.getElementById("personaje-input2").value;
    const metodo = document.getElementById("pago-input").value;
    const metodo2 = document.getElementById("pago-input2").value;
    const entrega = document.getElementById("entrega-input").value;
    const entrega2 = document.getElementById("entrega-input2").value;

    if (
        metodo == "VISA" ||
        metodo == "Master Card" ||
        metodo2 == "VISA" ||
        metodo2 == "Master Card"
    ) {
        const quantity = cantidad || "" + cantidad2 || "";
        const char = personaje || "" + personaje2 || "";
        const gamee = game || "" + game2 || "";
        let delivery = "";
        if (entrega == "-Seleccionar-") {
            delivery = entrega2;
        } else {
            delivery = entrega;
        }
        try {
            const res = await fetch("/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    quantity: quantity,
                    char: char,
                    delivery: delivery,
                    server: "",
                    faction: "",
                    game: gamee,
                }),
            });
            const data = await res.json();
            console.log(data);
            window.location.href = data.url;
        } catch (error) {
            console.error(error);
        }
    } else {
        if (
            cantidad != false &&
            personaje != false &&
            metodo != "-Seleccionar-" &&
            entrega != "-Seleccionar-"
        ) {
            window.Tawk_API.maximize();
            window.Tawk_API.setAttributes({
                name:
                    game +
                    " - " +
                    cantidad +
                    "k - PJ: " +
                    personaje +
                    " - Pago: " +
                    metodo +
                    " - Entrega: " +
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
                    game2 +
                    " - " +
                    cantidad2 +
                    "k - PJ: " +
                    personaje2 +
                    " - Pago: " +
                    metodo2 +
                    " - Entrega: " +
                    entrega2,
            });
            const comprar = document.getElementById("comprar2");
            comprar.innerHTML = "<strong>ACTUALIZAR</strong>";
        }
    }
}

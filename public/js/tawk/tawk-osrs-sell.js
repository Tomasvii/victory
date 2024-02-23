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
            const urlActual = window.location.href;
            const nuevaURL =
                urlActual +
                (urlActual.includes("?") ? "&" : "?") +
                "HelpCrunchInputText=" +
                "Vender%20oro%0A" +
                game +
                "%0A" +
                cantidad +
                "%20M%0A" +
                "Personaje:%20" +
                personaje +
                "%0A" +
                "Método%20de%20pago:%20" +
                metodo +
                "%0A" +
                "Método%20de%20entrega:%20" +
                entrega;
            window.location.href = nuevaURL;
        } else if (
            cantidad2 != false &&
            personaje2 != false &&
            metodo2 != "-Seleccionar-" &&
            entrega2 != "-Seleccionar-"
        ) {
            const urlActual = window.location.href;
            const nuevaURL =
                urlActual +
                (urlActual.includes("?") ? "&" : "?") +
                "HelpCrunchInputText=" +
                "Vender%20oro%0A" +
                game +
                "%0A" +
                cantidad2 +
                "%20M%0A" +
                "Personaje:%20" +
                personaje2 +
                "%0A" +
                "Método%20de%20pago:%20" +
                metodo2 +
                "%0A" +
                "Método%20de%20entrega:%20" +
                entrega2;
            window.location.href = nuevaURL;
        }
    }
}

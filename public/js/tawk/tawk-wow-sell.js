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
    const server = document.getElementById("serverInput")
        ? document
              .getElementById("serverInput")
              .options[
                  document.getElementById("serverInput").selectedIndex
              ].getAttribute("data-name")
        : null;
    const server2 = document.getElementById("serverInput2")
        ? document
              .getElementById("serverInput2")
              .options[
                  document.getElementById("serverInput2").selectedIndex
              ].getAttribute("data-name")
        : null;
    const faction = document.getElementById("faccionInput")
        ? document
              .getElementById("faccionInput")
              .options[
                  document.getElementById("faccionInput").selectedIndex
              ].getAttribute("data-name")
        : null;
    const faction2 = document.getElementById("faccionInput2")
        ? document
              .getElementById("faccionInput2")
              .options[
                  document.getElementById("faccionInput2").selectedIndex
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

    if (cantidad == "" && cantidad2 == "") {
        cantidad_input = document.getElementById("cantidad-input");
        cantidad_input.classList.add("is-invalid");
        cantidad_input = document.getElementById("invalid-cantidad");
        cantidad_input.classList.add("d-flex");
        cantidad_input.classList.remove("d-none");
        cantidad_input = document.getElementById("cantidad-input2");
        cantidad_input.classList.add("is-invalid");
        cantidad_input = document.getElementById("invalid-cantidad2");
        cantidad_input.classList.add("d-flex");
        cantidad_input.classList.remove("d-none");
    }

    if (personaje == "" && personaje2 == "") {
        personaje_input = document.getElementById("personaje-input");
        personaje_input.classList.add("is-invalid");
        personaje_input = document.getElementById("invalid-personaje");
        personaje_input.classList.add("d-flex");
        personaje_input.classList.remove("d-none");
        personaje_input = document.getElementById("personaje-input2");
        personaje_input.classList.add("is-invalid");
        personaje_input = document.getElementById("invalid-personaje2");
        personaje_input.classList.add("d-flex");
        personaje_input.classList.remove("d-none");
    }

    if (metodo == "-Seleccionar-" && metodo2 == "-Seleccionar-") {
        metodo_input = document.getElementById("pago-input");
        metodo_input.classList.add("is-invalid");
        metodo_input = document.getElementById("invalid-pago");
        metodo_input.classList.add("d-flex");
        metodo_input.classList.remove("d-none");
        metodo_input = document.getElementById("pago-input2");
        metodo_input.classList.add("is-invalid");
        metodo_input = document.getElementById("invalid-pago2");
        metodo_input.classList.add("d-flex");
        metodo_input.classList.remove("d-none");
    }

    if (entrega == "-Seleccionar-" && entrega2 == "-Seleccionar-") {
        entrega_input = document.getElementById("entrega-input");
        entrega_input.classList.add("is-invalid");
        entrega_input = document.getElementById("invalid-entrega");
        entrega_input.classList.add("d-flex");
        entrega_input.classList.remove("d-none");
        entrega_input = document.getElementById("entrega-input2");
        entrega_input.classList.add("is-invalid");
        entrega_input = document.getElementById("invalid-entrega2");
        entrega_input.classList.add("d-flex");
        entrega_input.classList.remove("d-none");
        return;
    }

    if (
        metodo == "VISA" ||
        metodo == "Master Card" ||
        metodo2 == "VISA" ||
        metodo2 == "Master Card"
    ) {
        const quantity = cantidad || "" + cantidad2 || "";
        const char = personaje || "" + personaje2 || "";
        const gamee = game || "" + game2 || "";
        const serverr = server || "" + server2 || "";
        const factionn = faction || "" + faction2 || "";
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
                    server: serverr,
                    faction: factionn,
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
            entrega != "-Seleccionar-" &&
            server != "-Seleccionar Servidor-" &&
            faction != false
        ) {
            const urlActual = window.location.href;
            const nuevaURL =
                urlActual +
                (urlActual.includes("?") ? "&" : "?") +
                "HelpCrunchInputText=" +
                "Vender%20oro%0A" +
                game +
                "%20-%20" +
                server +
                "%20-%20" +
                faction +
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
            entrega2 != "-Seleccionar-" &&
            server2 != "-Seleccionar Servidor-" &&
            faction2 != false
        ) {
            const urlActual = window.location.href;
            const nuevaURL =
                urlActual +
                (urlActual.includes("?") ? "&" : "?") +
                "HelpCrunchInputText=" +
                "Vender%20oro%0A" +
                game +
                "%20-%20" +
                server2 +
                "%20-%20" +
                faction2 +
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

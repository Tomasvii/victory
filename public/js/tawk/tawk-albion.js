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
    const cantidad = document.getElementById("cantidad-input").value;
    const cantidad2 = document.getElementById("cantidad-input2").value;
    const personaje = document.getElementById("personaje-input").value;
    const personaje2 = document.getElementById("personaje-input2").value;
    const metodo = document.getElementById("pago-input").value;
    const metodo2 = document.getElementById("pago-input2").value;
    const entrega = document.getElementById("entrega-input").value;
    const entrega2 = document.getElementById("entrega-input2").value;
    let total;
    const totalElement = document.getElementById("total22");
    if (totalElement) {
        const match = totalElement.innerText.match(/\d+(\.\d{1,2})?/);
        if (match) {
            total = match[0];
        }
    }
    let total2;

    const totalElement2 = document.getElementById("total21");
    if (totalElement2) {
        const match = totalElement2.innerText.match(/\d+(\.\d{1,2})?/);
        if (match) {
            total = match[0];
        }
    }

    if (cantidad == 0 && cantidad2 == 0) {
        cantidad_input = document.getElementById("cantidad-range");
        cantidad_input.classList.add("is-invalid");
        cantidad_input = document.getElementById("invalid-cantidad");
        cantidad_input.classList.add("d-flex");
        cantidad_input.classList.remove("d-none");
        cantidad_input = document.getElementById("cantidad-input2");
        cantidad_input.classList.add("is-invalid");
        cantidad_input = document.getElementById("invalid-cantidad2");
        cantidad_input.classList.add("d-flex");
        cantidad_input.classList.remove("d-none");
        return;
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
        return;
    }

    if (
        (metodo == "-Seleccionar-" && metodo2 == "-Seleccionar-") ||
        (metodo == "-Select-" && metodo2 == "-Select-")
    ) {
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
        return;
    }

    if (
        (entrega == "-Seleccionar-" && entrega2 == "-Seleccionar-") ||
        (entrega == "-Select-" && entrega2 == "-Select-")
    ) {
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

    if (total < 5 && total2 < 5) {
        entrega_input = document.getElementById("invalid-total");
        entrega_input.classList.add("is-invalid");
        entrega_input = document.getElementById("invalid-total");
        entrega_input.classList.add("d-block");
        entrega_input.classList.remove("d-none");
        entrega_input = document.getElementById("invalid-total2");
        entrega_input.classList.add("is-invalid");
        entrega_input = document.getElementById("invalid-total2");
        entrega_input.classList.add("d-block");
        entrega_input.classList.remove("d-none");
        return;
    }

    if (
        metodo == "VISA" ||
        metodo == "Master Card" ||
        metodo2 == "VISA" ||
        metodo2 == "Master Card"
    ) {
        const quantity = cantidad == 0 ? cantidad2 : cantidad;
        const char = personaje || "" + personaje2 || "";
        const gamee = game || "" + game2 || "";
        const serverr = server || "" + server2 || "";
        let delivery = "";
        if (entrega == "-Seleccionar-" || entrega == "-Select-") {
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
            cantidad != 0 &&
            personaje != false &&
            metodo != "-Seleccionar-" &&
            entrega != "-Seleccionar-" &&
            server != "-Seleccionar Servidor-"
        ) {
            const urlActual = window.location.href;
            const nuevaURL =
                urlActual +
                (urlActual.includes("?") ? "&" : "?") +
                "HelpCrunchInputText=" +
                "Buy%20silver%0A" +
                game +
                "%20-%20" +
                server +
                "%0A" +
                cantidad +
                "%20M%0A" +
                "Character:%20" +
                personaje +
                "%0A" +
                "Payment%20method:%20" +
                metodo +
                "%0A" +
                "Delivery%20method:%20" +
                entrega;
            window.location.href = nuevaURL;
        } else if (
            cantidad2 != 0 &&
            personaje2 != false &&
            metodo2 != "-Seleccionar-" &&
            entrega2 != "-Seleccionar-" &&
            server2 != "-Seleccionar Servidor-"
        ) {
            const urlActual = window.location.href;
            const nuevaURL =
                urlActual +
                (urlActual.includes("?") ? "&" : "?") +
                "HelpCrunchInputText=" +
                "Buy%20silver%0A" +
                game +
                "%20-%20" +
                server2 +
                "%0A" +
                cantidad2 +
                "%20M%0A" +
                "Character:%20" +
                personaje2 +
                "%0A" +
                "Payment%20method:%20" +
                metodo2 +
                "%0A" +
                "Delivery%20method:%20" +
                entrega2;
            window.location.href = nuevaURL;
        }
    }
}

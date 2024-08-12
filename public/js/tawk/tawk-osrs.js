async function comprar() {
    const check = document.getElementById("tos")
        ? document.getElementById("tos")
        : null;
    const check2 = document.getElementById("tos-2")
        ? document.getElementById("tos-2")
        : null;
    if (!check.checked && !check2.checked) {
        return;
    }
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
        return;
        const quantity = cantidad == 0 ? cantidad2 : cantidad;
        const char = personaje || "" + personaje2 || "";
        const gamee = game || "" + game2 || "";
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
                }),
            });
            const data = await res.json();
            console.log(data);
            window.location.href = data.url;
        } catch (error) {
            console.error(error);
        }
    } else {
        const iframe = document.getElementById("wtt-widget-iframe");

        if (iframe) {
            iframe.onload = function () {
                const iframeDocument =
                    iframe.contentDocument || iframe.contentWindow.document;

                const widgetButton = iframeDocument.querySelector(
                    "div.fixed.bottom-5.right-5 button.flex.items-center.justify-center.w-12.h-12.rounded-full.hover\\:filter.hover\\:brightness-90.focus\\:outline-none"
                );

                if (widgetButton) {
                    widgetButton.click();
                } else {
                    console.warn(
                        "No se encontró el botón del widget con la ruta CSS especificada dentro del iframe."
                    );
                }
            };

            if (iframe.contentDocument || iframe.contentWindow.document) {
                iframe.onload();
            }
        } else {
            console.warn("No se encontró el iframe con el id especificado.");
        }
    }
}

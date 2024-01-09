async function comprar() {
    const game = document.getElementById("productName")
        ? document.getElementById("productName").innerText
        : null;
    const game2 = document.getElementById("productName2")
        ? document.getElementById("productName2").innerText
        : null;
    const cantidad = document.getElementById("cantidad3").innerText.trim();
    const cantidad2 = document.getElementById("cantidad2").innerText.trim();
    const metodo = document.getElementById("pago-input").value;
    const metodo2 = document.getElementById("pago-input2").value;

    if (
        metodo == "VISA" ||
        metodo == "Master Card" ||
        metodo2 == "VISA" ||
        metodo2 == "Master Card"
    ) {
        const quantity = parseInt(cantidad) + parseInt(cantidad2) - 1;
        const gamee = game || "" + game2 || "";
        try {
            const res = await fetch("/create-checkout-session-store", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    quantity: quantity,
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
            game != false &&
            cantidad != false &&
            metodo != "-Método de pago-"
        ) {
            const urlActual = window.location.href;
            const nuevaURL =
                urlActual +
                (urlActual.includes("?") ? "&" : "?") +
                "HelpCrunchInputText=" +
                cantidad +
                "%20" +
                "x" +
                "%20" +
                game +
                "%0A" +
                "Método%20de%20pago:%20" +
                metodo;
            window.location.href = nuevaURL;
        } else if (
            game2 != false &&
            cantidad2 != false &&
            metodo2 != "-Seleccionar-"
        ) {
            const urlActual = window.location.href;
            const nuevaURL =
                urlActual +
                (urlActual.includes("?") ? "&" : "?") +
                "HelpCrunchInputText=" +
                cantidad2 +
                "%20" +
                "x" +
                "%20" +
                game2 +
                "%0A" +
                "Método%20de%20pago:%20" +
                metodo2;
            window.location.href = nuevaURL;
        }
    }
}

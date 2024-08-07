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
        (metodo2 == "-Seleccionar-" && metodo == "-Método de pago-") ||
        (metodo2 == "-Select-" && metodo == "-Payment method-")
    ) {
        return;
    }

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

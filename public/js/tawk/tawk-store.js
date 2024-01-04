var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/654000bea84dd54dc486d725/1hj7vu2os";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
})();

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
            window.Tawk_API.maximize();
            window.Tawk_API.setAttributes({
                name: cantidad + "x " + game + " - " + metodo,
            });
            const comprar = document.getElementById("comprar");
            comprar.innerHTML = "<strong>ACTUALIZAR</strong>";
        } else if (
            game2 != false &&
            cantidad2 != false &&
            metodo2 != "-Seleccionar-"
        ) {
            window.Tawk_API.maximize();
            window.Tawk_API.setAttributes({
                name: cantidad2 + "x " + game2 + " - " + metodo2,
            });
            const comprar = document.getElementById("comprar2");
            comprar.innerHTML = "<strong>ACTUALIZAR</strong>";
        }
    }
}

var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/654000bea84dd54dc486d725/1hhiunrja";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
})();

function coordinar() {
    const id = document.getElementById("transaction_id").textContent;

    window.Tawk_API.maximize();
    window.Tawk_API.setAttributes({
        name: "ID: " + id,
    });
}

function copy() {
    const id = document.getElementById("transaction_id").textContent;

    navigator.clipboard
        .writeText(id)
        .then(() => {
            if (Notification.permission === "granted") {
                new Notification("ID copiada al portapapeles: " + id);
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                        new Notification("ID copiada al portapapeles: " + id);
                    }
                });
            }
        })
        .catch(() => {
            if (Notification.permission === "granted") {
                new Notification("Error al copiar el ID" + id);
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                        new Notification("Error al copiar el ID" + id);
                    }
                });
            }
        });
}

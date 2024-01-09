function coordinar() {
    const id = document.getElementById("transaction_id").textContent;

    const urlActual = window.location.href;
    const nuevaURL =
        urlActual +
        (urlActual.includes("?") ? "&" : "?") +
        "HelpCrunchInputText=" +
        "Hola,%20he%20comprado%20éste%20producto:%0A" +
        "ID:%20" +
        id;
    window.location.href = nuevaURL;
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

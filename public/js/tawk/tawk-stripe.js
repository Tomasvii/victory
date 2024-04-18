function coordinar() {
    const id = document.getElementById("transaction_id").textContent;

    const urlActual = window.location.href;
    const nuevaURL =
        urlActual +
        (urlActual.includes("?") ? "&" : "?") +
        "HelpCrunchInputText=" +
        "Hi!%20I%20have%20purchased%20this%20product:%0A" +
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
                new Notification("ID copied to clipboard: " + id);
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                        new Notification("ID copied to clipboard: " + id);
                    }
                });
            }
        })
        .catch(() => {
            if (Notification.permission === "granted") {
                new Notification("Error trying to copy ID" + id);
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then((permission) => {
                    if (permission === "granted") {
                        new Notification("Error trying to copy ID" + id);
                    }
                });
            }
        });
}

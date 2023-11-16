const selectGame =
    document.getElementById("juegoInput") == null
        ? document.getElementById("juegoInput2")
        : document.getElementById("juegoInput");
const selectGame2 =
    document.getElementById("juegoInput2") == null
        ? document.getElementById("juegoInput")
        : document.getElementById("juegoInput2");
const selectServer =
    document.getElementById("serverInput") == null
        ? document.getElementById("serverInput2")
        : document.getElementById("serverInput");
const selectServer2 =
    document.getElementById("serverInput2") == null
        ? document.getElementById("serverInput")
        : document.getElementById("serverInput2");
const selectFaction =
    document.getElementById("faccionInput") == null
        ? document.getElementById("faccionInput2")
        : document.getElementById("faccionInput");
const selectFaction2 =
    document.getElementById("faccionInput") == null
        ? document.getElementById("faccionInput")
        : document.getElementById("faccionInput2");

selectGame.addEventListener("change", function () {
    const selectedGameValue = selectGame.value;
    window.location.href = `http://localhost:3000/game/${selectedGameValue}`;
});

selectGame2.addEventListener("change", function () {
    const selectedGameValue = selectGame2.value;
    window.location.href = `http://localhost:3000/game/${selectedGameValue}`;
});

selectServer.addEventListener("change", function () {
    const selectedGameValue = selectGame.value;
    const selectedServerValue = selectServer.value;

    window.location.href = `http://localhost:3000/game/${selectedGameValue}/${selectedServerValue}`;
});

selectServer2.addEventListener("change", function () {
    const selectedGameValue = selectGame2.value;
    const selectedServerValue = selectServer2.value;

    window.location.href = `http://localhost:3000/game/${selectedGameValue}/${selectedServerValue}`;
});

selectFaction.addEventListener("change", function () {
    const selectedGameValue = selectGame.value;
    const selectedServerValue = selectServer.value;
    const selectedFactionValue = selectFaction.value;

    window.location.href = `http://localhost:3000/game/${selectedGameValue}/${selectedServerValue}/${selectedFactionValue}`;
});

selectFaction2.addEventListener("change", function () {
    const selectedGameValue = selectGame2.value;
    const selectedServerValue = selectServer2.value;
    const selectedFactionValue = selectFaction2.value;

    window.location.href = `http://localhost:3000/game/${selectedGameValue}/${selectedServerValue}/${selectedFactionValue}`;
});

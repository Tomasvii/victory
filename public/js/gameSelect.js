const selectGame = document.getElementById("juegoInput");
const selectServer = document.getElementById("serverInput");
const selectFaction = document.getElementById("faccionInput");

selectGame.addEventListener("change", function () {
    const selectedGameValue = selectGame.value;

    window.location.href = `http://localhost:3000/${selectedGameValue}`;
});

selectServer.addEventListener("change", function () {
    const selectedGameValue = selectGame.value;
    const selectedServerValue = selectServer.value;

    window.location.href = `http://localhost:3000/${selectedGameValue}/${selectedServerValue}`;
});

selectFaction.addEventListener("change", function () {
    const selectedGameValue = selectGame.value;
    const selectedServerValue = selectServer.value;
    const selectedFactionValue = selectFaction.value;

    window.location.href = `http://localhost:3000/${selectedGameValue}/${selectedServerValue}/${selectedFactionValue}`;
});

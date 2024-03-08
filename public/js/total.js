const unitInput = document.getElementById("cantidad-input");
const totalDisplay = document.getElementById("total");
const totalDisplay2 = document.getElementById("total2");
const quantity = document.getElementById("cantidad");
const priceUnit = document.getElementById("price");
const cantidadRange = document.getElementById("cantidad-range");

const unitInput2 = document.getElementById("cantidad-input2");
const totalDisplay21 = document.getElementById("total21");
const totalDisplay22 = document.getElementById("total22");
const quantity2 = document.getElementById("cantidad2");
const priceUnit2 = document.getElementById("price2");
const cantidadRange2 = document.getElementById("cantidad-range2");
const juegoName2 = document.getElementById("juego-name2").textContent;

unitInput.addEventListener("input", function () {
    const unitValue = parseFloat(unitInput.value);
    const pricePerUnit = parseFloat(priceUnit.innerText);
    let total = "";
    if (
        juegoName2 == "WoW Hardcore" ||
        juegoName2 == "WoW SoD" ||
        juegoName2 == "WoW Retail"
    ) {
        total = (unitValue * pricePerUnit) / 100;
    } else {
        total = unitValue * pricePerUnit;
    }
    if (!isNaN(total)) {
        quantity.innerHTML = `<strong>${unitValue.toLocaleString()}</strong>`;
        totalDisplay.innerHTML = `<strong>$ ${total
            .toFixed(2)
            .toLocaleString()}</strong>`;
        totalDisplay2.innerHTML = `Total: <strong>$ ${total
            .toFixed(2)
            .toLocaleString()}</strong>`;
        cantidadRange.innerHTML = `${unitValue.toLocaleString()}`;
    } else {
        quantity.innerHTML = `<strong>--</strong>`;
        totalDisplay.innerHTML = `--`;
        totalDisplay2.innerHTML = `Total: <strong>$ --</strong>`;
    }
});

unitInput2.addEventListener("input", function () {
    const unitValue2 = parseFloat(unitInput2.value);
    const pricePerUnit2 = parseFloat(priceUnit2.innerText);
    let total2 = "";
    if (
        juegoName2 == "WoW Hardcore" ||
        juegoName2 == "WoW SoD" ||
        juegoName2 == "WoW Retail"
    ) {
        total2 = (unitValue2 * pricePerUnit2) / 100;
    } else {
        total2 = unitValue2 * pricePerUnit2;
    }
    if (!isNaN(total2)) {
        quantity2.innerHTML = `<strong>${unitValue2.toLocaleString()}</strong>`;
        totalDisplay21.innerHTML = `<strong>$ ${total2
            .toFixed(2)
            .toLocaleString()}</strong>`;
        totalDisplay22.innerHTML = `Total: <strong>$ ${total2
            .toFixed(2)
            .toLocaleString()}</strong>`;
        cantidadRange2.innerHTML = `${unitValue2.toLocaleString()}`;
    } else {
        quantity2.innerHTML = `<strong>--</strong>`;
        totalDisplay21.innerHTML = `--`;
        totalDisplay22.innerHTML = `Total: <strong>$ --</strong>`;
    }
});

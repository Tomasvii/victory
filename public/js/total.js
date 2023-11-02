const unitInput = document.getElementById("cantidad-input");
const totalDisplay = document.getElementById("total");
const totalDisplay2 = document.getElementById("total2");
const quantity = document.getElementById("cantidad");
const priceUnit = document.getElementById("price");

unitInput.addEventListener("input", function () {
    const unitValue = parseFloat(unitInput.value);
    const pricePerUnit = parseFloat(priceUnit.innerText);
    const total = unitValue * pricePerUnit;
    if (!isNaN(total)) {
        quantity.innerHTML = `<strong>${unitValue.toLocaleString()}</strong>`;
        totalDisplay.innerHTML = `<strong>$ ${total.toLocaleString()}</strong>`;
        totalDisplay2.innerHTML = `Total: <strong>$ ${total.toLocaleString()}</strong>`;
    } else {
        quantity.innerHTML = `<strong>--</strong>`;
        totalDisplay.innerHTML = `--`;
        totalDisplay2.innerHTML = `Total: <strong>$ --</strong>`;
    }
});

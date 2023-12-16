const unitInput = document.getElementById("cantidad-input");
const totalDisplay = document.getElementById("total");
const totalDisplay2 = document.getElementById("total2");
const quantity = document.getElementById("cantidad");
const priceUnit = document.getElementById("price");

const unitInput2 = document.getElementById("cantidad-input2");
const totalDisplay21 = document.getElementById("total21");
const totalDisplay22 = document.getElementById("total22");
const quantity2 = document.getElementById("cantidad2");
const priceUnit2 = document.getElementById("price2");

unitInput.addEventListener("input", function () {
    const unitValue = parseFloat(unitInput.value);
    const pricePerUnit = parseFloat(priceUnit.innerText);
    const total = unitValue * pricePerUnit;
    if (!isNaN(total)) {
        quantity.innerHTML = `<strong>${unitValue.toLocaleString()} K</strong>`;
        totalDisplay.innerHTML = `<strong>$ ${total.toLocaleString()}</strong>`;
        totalDisplay2.innerHTML = `Total: <strong>$ ${total.toLocaleString()}</strong>`;
    } else {
        quantity.innerHTML = `<strong>--</strong>`;
        totalDisplay.innerHTML = `--`;
        totalDisplay2.innerHTML = `Total: <strong>$ --</strong>`;
    }
});

unitInput2.addEventListener("input", function () {
    const unitValue2 = parseFloat(unitInput2.value);
    const pricePerUnit2 = parseFloat(priceUnit2.innerText);
    const total2 = unitValue2 * pricePerUnit2;
    if (!isNaN(total2)) {
        quantity2.innerHTML = `<strong>${unitValue2.toLocaleString()} K</strong>`;
        totalDisplay21.innerHTML = `<strong>$ ${total2.toLocaleString()}</strong>`;
        totalDisplay22.innerHTML = `Total: <strong>$ ${total2.toLocaleString()}</strong>`;
    } else {
        quantity2.innerHTML = `<strong>--</strong>`;
        totalDisplay21.innerHTML = `--`;
        totalDisplay22.innerHTML = `Total: <strong>$ --</strong>`;
    }
});

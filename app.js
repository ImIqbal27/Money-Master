function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    return inputAmount;
};

function displayNumbers(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount;
}









/////////////////// calculate  button handle ////////////
document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = getInputValue('input-income');
    const food = getInputValue('food-input');
    const rent = getInputValue('rent-input');
    const cloths = getInputValue('cloths-input');
    const totalCost = food + rent + cloths;
    const totalCostDisplay = displayNumbers('display-total-cost', totalCost);

    const balance = income - totalCost;
    const balanceDisplay = displayNumbers('display-balance', balance)


})
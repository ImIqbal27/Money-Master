/////////////////////////// function /////////////////////
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    if (inputAmount > 0) {
        return inputAmount;
    }


};

function displayNumbers(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount;
}
///////////////////////////////////////////////////////////
/////////////////// calculate  button handle ////////////
///////////////////////////////////////////////////////////
document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = getInputValue('input-income');

    const food = getInputValue('food-input');
    const rent = getInputValue('rent-input');
    const cloths = getInputValue('cloths-input');
    const totalCost = food + rent + cloths;


    if (income > totalCost) {
        const balance = income - totalCost;
        const balanceDisplay = displayNumbers('display-balance', balance)
        const totalCostDisplay = displayNumbers('display-total-cost', totalCost);

    }
    else {

        alert('You have given wrong  input !');
        document.getElementById('input-income').value = '';
        document.getElementById('food-input').value = '';
        document.getElementById('rent-input').value = '';
        document.getElementById('cloths-input').value = '';
    }


});

////////////////  save button handle  /////////////////////
document.getElementById('save-btn').addEventListener('click', function () {

    const income = getInputValue('input-income');
    const percentageNumber = getInputValue('save-input');


    const savingAmount = (income * percentageNumber) / 100;

    const food = getInputValue('food-input');
    const rent = getInputValue('rent-input');
    const cloths = getInputValue('cloths-input');
    const totalCost = food + rent + cloths;

    const balance = income - totalCost;

    if (savingAmount <= balance) {
        const savingAmountDisplay = displayNumbers('display-saving-amount', savingAmount);
        const remainingBalance = balance - savingAmount;
        const remainingBalanceDisplay = displayNumbers('display-remaining-balance', remainingBalance)
        document.getElementById('saving-error').innerText = '';

    }
    else {
        document.getElementById('saving-error').innerText = 'Low balance ! ';
        document.getElementById('display-saving-amount').innerText = '';
        document.getElementById('display-remaining-balance').innerText = '';

    }




});



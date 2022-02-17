/////////////////////////// function /////////////////////
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);

    if (typeof (inputAmount) != 'number' && typeof (inputAmount) == 'string' && inputAmount < 0) {
        const a = document.getElementById('income-error');
        a.innerText = 'Invalid input: Only positive number is acceptable! ';


    }
    else {
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
        alert('Total expenses can`t be more then your Income !');
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

    }
    else {
        const a = document.getElementById('saving-error');
        a.innerText = 'Low balance ';
    }




});



function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    return inputAmount;
};











/////////////////// calculate  button handle ////////////
document.getElementById('calculate-btn').addEventListener('click' , function(){
    const income= getInputValue('')
})
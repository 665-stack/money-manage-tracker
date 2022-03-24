function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;
}
function expensesCalc(inputField) {

}
document.getElementById('calc-btn').addEventListener('click', function () {
    const incomeInput = getInputValue('income-input');
    console.log('incomeInput -- ', incomeInput)
    const foodInput = getInputValue('food-input');
    console.log('fontInput -- ', foodInput)
    const rentInput = getInputValue('rent-input');
    console.log('rentInput -- ', rentInput);
    const clothsInput = getInputValue('cloths-input');
    console.log('clothsInput -- ', clothsInput)
})
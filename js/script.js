function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;
}
function expensesCalc() {
    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothsInput = getInputValue('cloths-input');
    const expensesSum = foodInput + rentInput + clothsInput;
    return expensesSum;
}
// function updateTotal() {
//     const income = getInputValue();
//     const expenses = expensesCalc();
//     const minus = income + expenses;
//     console.log(minus)

//     return minus;
// }
function getCurrentBalance() {
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotal = parseFloat(totalBalanceText);
    return previousTotal;
}
document.getElementById('calc-btn').addEventListener('click', function () {
    const incomeInput = getInputValue('income-input');
    console.log('incomeInput -- ', incomeInput);
    const getExpenses = expensesCalc();

    console.log('getExpenses -- ', getExpenses);
    const getUpdateTotal = incomeInput - getExpenses;
    const Balance = getCurrentBalance();
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = getUpdateTotal;

    console.log('getUpdateTotal -- ', getUpdateTotal)
})
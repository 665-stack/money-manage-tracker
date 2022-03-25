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
// calculator button
document.getElementById('calc-btn').addEventListener('click', function () {
    const income = getInputValue('income-input');
    const expenses = expensesCalc();
    //update total expenses
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = expenses;
    //update balance
    const UpdateBalanceTotal = income - expenses;
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = UpdateBalanceTotal;
})
// save button
document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = getInputValue('save-input');
    const income2 = getInputValue('income-input');
    const expenses = expensesCalc();
    const updateBlcTotal = income2 - expenses;
    // save amount
    const saveMoneyCalc = (updateBlcTotal / 100) * saveInput;
    const savingAmount = document.getElementById('save-amount');
    savingAmount.innerText = saveMoneyCalc;
    // remainnig balance
    const remainnigMoneyCalc = updateBlcTotal - saveMoneyCalc;
    const remainnigBalance = document.getElementById('remainnig-balance');
    remainnigBalance.innerText = remainnigMoneyCalc;
    console.log('remainnigMoneyCalc -- ', remainnigMoneyCalc)

});
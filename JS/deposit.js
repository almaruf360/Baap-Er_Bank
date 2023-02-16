console.log('hello from bank js');


// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount from deposit input field
    const depositField =document.getElementById('deposit-field');
    const newDepositAmountStrnig =depositField.value ;  
    const newDepositAmount = parseFloat(newDepositAmountStrnig);
    // steop-3: get the current deposit total
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    depositTotalElement.innerText=newDepositAmount;
    // step-4: add numbers to set the total deposit
    const currentDepositTotal =previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText=currentDepositTotal;
    // step-5: get balance current total
    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalstring=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalstring);

    // step-6: calculate current total balance
    const currentBalanceTotal=previousBalanceTotal + newDepositAmount; 
    // set the total
    balanceTotalElement.innerText=currentBalanceTotal;
    // ste-7: clear the deposit field
    depositField.value = '';
})
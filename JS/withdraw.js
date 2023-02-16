document.getElementById('btn-Withdraw').addEventListener('click', function () {
    const WithdrawField =document.getElementById('withdraw-field');
    const newWithdrawAmountString=WithdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
 
    WithdrawField.value='';

    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal =parseFloat(previousWithdrawTotalString);
    
    const newWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    
    withdrawTotalElement.innerText=newWithdrawTotal;

    const balanceElement=document.getElementById('balance-total');
    const previousBalanceTotalstring=balanceElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalstring);

    const newBalanceTotal=previousBalanceTotal-newWithdrawAmount ;
    balanceElement.innerText=newBalanceTotal;
})
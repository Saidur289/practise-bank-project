document.getElementById('addMoney-btn').addEventListener('click', function(event){
    // console.log('clikde');
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    // console.log(inputAmount, pinNumber);
    if(pinNumber === '1234'){
        // console.log('add money');
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const inputAmountNumber = parseFloat(inputAmount);
        const newBalance = balanceNumber + inputAmountNumber;
        document.getElementById('current-balance').innerText = newBalance;
    }else{
        alert('failed to add money and try again')
    }
} )
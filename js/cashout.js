document.getElementById('cash-out-btn').addEventListener('click', function(event){
    // console.log('clickde');
    event.preventDefault();
    const cashAmount = document.getElementById('cash-out-amount').value;
    const cashPin = document.getElementById('cash-pin-number').value;
    // console.log(cashAmount, cashPin);
    if(cashPin === '1234'){
        // console.log('cash out money');
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const cashAmountNumber = parseFloat(cashAmount);
        const newBalance = balanceNumber - cashAmountNumber;
        document.getElementById('current-balance').innerText = newBalance;

    }else{
        alert('failed cash out money and try again');
    }
})
// step - 1 show cash out 
document.getElementById('show-cash-out').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.remove('hidden')
})
// step -2 show add money
document.getElementById('show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden')
})
document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney); 
    const pinNumber = document.getElementById('input-Pin-Number').value;
    
    console.log(addMoney, pinNumber);
// Wrong Way to verify Pin
    if( pinNumber === '1234'){
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
    
    const newBalance = balanceNumber+ addMoneyNumber;

    document.getElementById('account-balance').innerText = newBalance;
    }
    else{
            alert('Failed to add money')
    }
})
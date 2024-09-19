// step -1 addEventListener on login btn 
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const pinNumber = document.getElementById('login-pin').value;
    // console.log(pinNumber);
    const loginNumber = document.getElementById('login-number').value;
    // console.log(loginNumber);
    // step -2 check pinNumber and number 
    if(loginNumber === '5' && pinNumber === '1234'){
        console.log('log in bank');
        window.location.href = './home.html';
    }else{
        alert('failed to login and try again');
    }
})
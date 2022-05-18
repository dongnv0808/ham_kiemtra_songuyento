function isPrime(number){
    console.log(typeof number)
    let checkPrime = true;
    if(number < 2){
        checkPrime = false;
    }else if(number === 2){
        checkPrime = true;
    }else{
        for(let i = 2; i < number; i++){
            if(number % i === 0){
                checkPrime = false;
            }
        }
    }
    if(checkPrime != false){
        alert(`${number} la so nguyen to`);
    }else{
        alert(`${number} ko phai la so nguyen to`);
    }
}
function checkPrime(number){
    
}
let number = +prompt("Nhap so can kiem tra:");
isPrime(number);
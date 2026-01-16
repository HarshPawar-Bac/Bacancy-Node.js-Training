let pos = 8;
let neg = -8;
let zero = 0;

function checkNumber(num){

    if(typeof num !== 'number' || Number.isNaN(num)){
        return 'Invalid Number';
    }

    if(num === 0)
        return 'zero';
    else if(num < 0)
        return 'negative';
    else if(num > 0)
        return 'positive'
    
    return 'NaN'
}

console.log(checkNumber(pos));

console.log(checkNumber(zero));

console.log(checkNumber(neg));

console.log(checkNumber("kjsjs"));

console.log(checkNumber(NaN));
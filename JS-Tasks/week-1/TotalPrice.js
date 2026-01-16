
function calculateTotalPrice(price, quantity){
    if(isNaN(quantity) || quantity === 0)
        return 'invalid quantity';
    if(isNaN(price) || price === 0)
        return 'invalid price';

    return price * quantity;
}


console.log(calculateTotalPrice(150, 4))
console.log(calculateTotalPrice(150, 4))
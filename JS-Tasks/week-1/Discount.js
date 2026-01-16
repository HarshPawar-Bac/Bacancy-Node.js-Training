const save10 = 'SAVE10';
const save20 = 'SAVE20';

const price = 999;

const regx = 'SAVE'

function applyCoupon(price, coupon){

    if(!coupon.includes(regx))
        return price;

    let split = coupon.split('SAVE');
    let discount = Number(split[1]);

    let disPrice = price - (discount*price/100);

    return `${coupon} => ${disPrice}`
}

console.log(applyCoupon(1000, save10));
console.log(applyCoupon(2000, save20));
console.log(applyCoupon(500, 'NONE'));
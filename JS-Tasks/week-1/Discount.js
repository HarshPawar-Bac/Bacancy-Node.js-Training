const save10 = 'SAVE10';
const save20 = 'SAVE20';

const price = 999;

const regx = /^SAVE(\d{1,2})$/;

function applyCoupon(price, coupon){

    if (typeof price !== "number" || price <= 0) {
      throw new Error("Invalid price");
    }

    if (typeof coupon !== "string") {
      return price;
    }

    const match = coupon.match(regx);

    if(!match){
        return price;
    }

    let discount = Number(match[1]);

    const discountedPrice = price - (price * discount) / 100;

    return `${coupon} => ${discountedPrice}`;
}

console.log(applyCoupon(1000, save10));
console.log(applyCoupon(2000, save20));
console.log(applyCoupon(500, 'NONE'));
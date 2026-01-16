
function calculateTotalPrice(price, quantity){
    if (typeof price !== "number" || Number.isNaN(price) || price < 0) {
      throw new Error("Invalid price");
    }

    if (
      typeof quantity !== "number" ||
      Number.isNaN(quantity) ||
      quantity <= 0
    ) {
      throw new Error("Invalid quantity");
    }

    return price * quantity;
}


console.log(calculateTotalPrice(150, 4))
console.log(calculateTotalPrice(150, 4))
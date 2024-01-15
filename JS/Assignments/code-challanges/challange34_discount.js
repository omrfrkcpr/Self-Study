//! Write a function that takes the product price and discount rate as parameters and gives the original price, discount rate and discounted amount as output.

const discount = (price, rate) => {
  return `Original Price: ${price} / Discount Rate: ${rate} / Discounted Price: ${
    price - (price * rate) / 100
  } `;
};

console.log(discount(1000, 20));

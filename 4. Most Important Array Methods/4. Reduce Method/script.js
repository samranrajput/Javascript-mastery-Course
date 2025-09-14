const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, crruntValue) => {
//   return accumulator + crruntValue;
// });

// console.log(sum);

const cart = [
  {
    productId: 1,
    productName: "Mobile",
    price: 22000,
  },
  {
    productId: 2,
    productName: "Laptop",
    price: 30000,
  },
  {
    productId: 3,
    productName: "Watch",
    price: 3000,
  },
  {
    productId: 4,
    productName: "Mouse",
    price: 1000,
  },
];

const totalSum = cart.reduce((totalPrice, crruntProduct) => {
  return totalPrice + crruntProduct.price;
}, 0);

console.log(totalSum);

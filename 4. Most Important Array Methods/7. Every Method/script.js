const carts = [
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

let checkPrice = carts.every((cart) => {
    return cart.price <= 30000
})

console.log(checkPrice)
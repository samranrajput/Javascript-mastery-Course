let numbers = [200, 400, 300, 100, 500, 900, 700, 800, 1000, 600];
numbers.sort((a, b) => a - b);
console.log(numbers);

let names = ["samran", "kashan", "irfan", "Ahmed", "rafay"];
names.sort();
console.log(names);
let products = [
  {
    productId: 1,
    productName: "Mobile",
    price: 20000,
  },
  {
    productId: 2,
    productName: "Watch",
    price: 5000,
  },
  {
    productId: 3,
    productName: "Laptop",
    price: 25000,
  },
  {
    productId: 4,
    productName: "ball",
    price: 200,
  },
];

products.sort((a, b) => {
  return a.price - b.price;
});

console.log(products);

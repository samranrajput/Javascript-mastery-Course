const bucket = [
  "Spegity",
  "Chips",
  "Rhooafza",
  "Water",
  "Salt",
  "Vegetables",
  "Rise",
  "Chiken",
  "Masala",
];

// Promise Example 1
function RisePromise() {
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("Rise") &&
      bucket.includes("Salt") &&
      bucket.includes("Water") &&
      bucket.includes("Masala") &&
      bucket.includes("Chiken")
    ) {
      resolve("Eat Rise");
    } else {
      reject("Item Missing");
    }
  });
}

RisePromise()
  .then((resolveValue) => {
    console.log(resolveValue);
  })
  .catch((rejectValue) => {
    console.log(rejectValue);
  });

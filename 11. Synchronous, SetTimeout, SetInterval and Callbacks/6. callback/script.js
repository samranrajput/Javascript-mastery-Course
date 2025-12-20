// function func(callback) {
//   console.log("I am func");
//   callback();
// }

// func(() => {
//   console.log("i am func 2");
// });

function getTwoNo(num1, num2, onSuccess, onError) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    onSuccess(num1, num2);
  } else {
    onError();
  }
}

// function addTwoNo(num1, num2) {
//   console.log(num1 + num2);
// }

getTwoNo(
  5,
  5,
  (num1, num2) => {
    console.log(num1 + num2);
  },
  () => {
    console.log("Wrong");
  }
);

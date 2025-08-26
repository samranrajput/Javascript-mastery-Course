const app = () => {
  const myFunc = () => {
    console.log("hello my func");
  };

  const addTwo = (num1, num2) => {
    return num1 + num2;
  };

  const addThree = (num1, num2, num3) => num1 + num2 + num3;

  console.log("inside app");

  myFunc();
  console.log(addTwo(2, 3));
  console.log(addThree(2, 2, 2));
};
app();
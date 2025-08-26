const myVar = "Value1";
const myFunc = () => {
//   const myVar = "Value2";
  const myFunc2 = () => {
    // const myVar = "Value3";
    console.log("Hello My Func2");
    console.log(myVar);
  };
  console.log("Hello My Func");
  //   console.log(myVar);
  myFunc2();
};
myFunc();
// function calculatePower(power) {
//   return function (number) {
//     return number ** power;
//   };
// }

const calculatePower = (power) => (number) => number ** power;

const square = calculatePower(2);
console.log(square(3));

const cube = calculatePower(3);
console.log(cube(3));

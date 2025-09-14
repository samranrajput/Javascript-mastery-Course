const numbers = [2, 4, 7, 9];

// const square = (number) => {
//   return number * number;
// };

// const square = function (number) {
//   return number * number;
// };

// const square = (number) => {
//   return number * number;
// };

// const squareNumbersList = numbers.map(square);
// console.log(squareNumbersList);

const users = [
  {
    name: "samran",
    fname: "irfan",
    age: 17,
  },
  {
    name: "rafay",
    fname: "saleem",
    age: 17,
  },
  {
    name: "ibrahim",
    fname: "usman",
    age: 17,
  },
];

// const getUser = (user) => {
//   return user;
// };

// userDetail = users.map(getUser);
// console.log(userDetail);

const userName = users.map((user) => {
  return user.fname;
});
console.log(userName);

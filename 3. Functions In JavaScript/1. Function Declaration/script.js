function HappyBirthdaySong() {
  console.log("Happy Birthday Too You ...........");
}

// HappyBirthdaySong();

// One Time useable Function
// function TowPlusFour() {
//   console.log(2 + 4);
// }

// TowPlusFour();

// Reuseable Function
// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(6, 2));

// function isEven(num) {
//   return num % 2 == 0;
// }
// console.log(isEven(3));
// "samran".toUpperCase().slice(1, length - 1);
// function firstChar(string) {
//   return string[0].toUpperCase() + string.slice(1, string.length);
// }
// console.log(firstChar("samran"));

function findNumber(array, num) {
  for (let i in array) {
    if (array[i] === num) {
      return i;
    }
  }
  return `${num} is not in the array.`;
}
console.log(findNumber([1, 5, 9, 2, 7], 7));

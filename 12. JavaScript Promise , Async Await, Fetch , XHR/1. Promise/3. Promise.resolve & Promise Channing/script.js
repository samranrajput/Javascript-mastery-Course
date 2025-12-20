// const promiseChanning = Promise.resolve(5);

// promiseChanning
//   .then((value) => {
//     console.log(value);
//     value += 5;
//     return value; // Promise.resolve(value)
//   })
//   .then((value) => {
//     console.log(value);
//     value += 5;
//     return value;
//   })
//   .then((value) => {
//     console.log(value);
//     value += 5;
//     return value;
//   })
//   .then((value) => {
//     console.log(value);
//     value += 5;
//     return value;
//   })
//   .then((value) => {
//     console.log(value);
//     value += 5;
//     return value;
//   });

// function trainTicket(age) {
//   return new Promise((resolve, reject) => {
//     if (age >= 80) {
//       resolve("Train Ticket Price is 200");
//     } else if (age <= 80 && age >= 5) {
//       resolve("Train Ticket Price is 250");
//     } else if (age <= 5 && age >= 0) {
//       resolve("Train Ticket Free");
//     } else {
//       reject("Wrong Input");
//     }
//   });
// }

// trainTicket(-6)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

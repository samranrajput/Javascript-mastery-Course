// Promise Example 2
const timePromise = new Promise((resolve, reject) => {
  const boolean = false;
  setTimeout(() => {
    if (boolean) {
      resolve("Resolve");
    } else {
      reject("Reject");
    }
  }, 2000);
});

timePromise
  .then((resolveValue) => {
    console.log(resolveValue);
  })
  .catch((rejectValue) => {
    console.log(rejectValue);
  });

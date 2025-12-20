console.log("js Start");

const id = setTimeout(() => {
  console.log("Hello World");
}, 1000);

for (let i = 0; i < 1000; i++) {
  console.log("....");
}

console.log("clear settimeout");

clearTimeout(id);

console.log("js End");

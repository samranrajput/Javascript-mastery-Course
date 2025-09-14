function func1(name) {
  console.log("I am func 1");
  console.log(`I am ${name}`);
}

function func2() {
  console.log("I am func 2");
  return func1;
}

let func = func2();
func("samran");

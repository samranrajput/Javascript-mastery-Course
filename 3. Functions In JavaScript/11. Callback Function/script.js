function func1(name) {
  console.log("I am func 1");
  console.log(`I am ${name}`);
}

function func2(a) {
  console.log("I am func 2");
  a("samran");
}

func2(func1);

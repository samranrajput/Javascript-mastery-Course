function outerFunc() {
  let a = true;
  return function () {
    if (a) {
      console.log("I Am Called");
    } else {
      console.error("I Am Already Called");
    }
    a = false;
  };
}

const func = outerFunc();
func();
func();
func();

const func2 = outerFunc();
func2();
func2();
func2();

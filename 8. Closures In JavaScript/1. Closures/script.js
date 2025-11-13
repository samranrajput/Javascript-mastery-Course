function outerFunc(firstName, lastName) {
  console.log(arguments);
  function innerFunc() {
    console.log(arguments);
    console.log(firstName, lastName);
  }
  return innerFunc;
}
const fullName = outerFunc("Muhammad", "Samran");
fullName();

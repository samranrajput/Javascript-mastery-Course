const person = {
  name: "Samran",
  fName: "Irfan",
};

function getDetails({ name, fName }) {
  console.log(name);
  console.log(fName);
}
getDetails(person);

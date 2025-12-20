const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);

xhr.open("GET", url);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data[0].title);
//   }
// };

xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
  console.log(data[0]);
  console.log(data[0].title);
};

xhr.send();

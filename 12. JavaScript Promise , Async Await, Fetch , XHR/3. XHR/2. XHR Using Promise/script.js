const api = "https://jsonplaceholder.typicode.com/posts";

// function getData(id) {
//   return new Promise((resolve, reject) => {
//     newApi = `${api}/${id}`;
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", newApi);
//     xhr.onload = function () {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         const data = JSON.parse(xhr.response);
//         resolve({
//           status: xhr.status,
//           message: "Successfully Get Data",
//           data: data,
//         });
//       } else {
//         reject({
//           status: xhr.status,
//           message: "Api Error",
//         });
//       }
//     };

//     xhr.onerror = function () {
//       reject({
//         status: xhr.status,
//         message: "Network Error",
//       });
//     };

//     xhr.send();
//   });
// }

// getData(6)
//   .then((data) => {
//     console.log(data.status);
//     console.log(data.message);
//     console.log(data.data);
//     return getData(10);
//   })
//   .then((data) => {
//     console.log(data.status);
//     console.log(data.message);
//     console.log(data.data);
//     return getData(15);
//   })
//   .then((data) => {
//     console.log(data.status);
//     console.log(data.message);
//     console.log(data.data);
//   })
//   .catch((Error) => {
//     console.log(Error.status);
//     console.log(Error.message);
//   });

function sendRequest(method, api) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, api);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something Went Wrong"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

sendRequest("GET", api)
  .then((data) => {
    console.log(data);
  })
  // .then((data) => {
  //   console.log(data.status);
  //   console.log(data.message);
  //   console.log(data.data);
  //   return getData(15);
  // })
  // .then((data) => {
  //   console.log(data.status);
  //   console.log(data.message);
  //   console.log(data.data);
  // })
  .catch((Error) => {
    console.log(Error);
  });

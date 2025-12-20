const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr);

xhr.open("GET", url);

xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  if (xhr.status >= 200 && xhr.status < 300) {
    const id = data[3].id;
    const url2 = `${url}/${id}`;
    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", url2);
    xhr2.onload = function () {
      const data2 = JSON.parse(xhr2.response);
      console.log(data2);
    };
    xhr2.send();
  } else {
    console.log(xhr.status, "Page Not Found");
  }
};

xhr.onerror = function () {
  console.log("error");
};

xhr.send();

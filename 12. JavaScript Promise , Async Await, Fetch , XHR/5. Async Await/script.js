const api = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const res = await fetch(api);
  const data = await res.json();
  return data;
}

getPosts().then((myData) => {
  console.log(myData);
});

// get and set attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(8));
link.setAttribute("href", "https://jawharatalarab.com/");
console.log(link.getAttribute("href").slice(8));

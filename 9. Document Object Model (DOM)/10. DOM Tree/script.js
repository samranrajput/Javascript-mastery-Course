const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode1);
// console.log(bodyElementNode);

// console.log(headElementNode.parentNode);
// console.log(headElementNode.nextSibling);
// console.log(headElementNode.nextSibling.nextSibling);
// console.log(headElementNode.nextElementSibling);

// const h1 = document.querySelector("h1");
// h1.parentNode.style.background = "red";
// h1.parentNode.style.color = "white";

// const body = document.body;
// console.log(body);

// const head = document.querySelector("head");
// console.log(head);

// const title = head.querySelector("title");
// console.log(title);

const html = document.children[0];
console.log(html);

const htmlChildrens = html.children;
console.log(htmlChildrens);

const headChildren = html.children[0];
console.log(headChildren);

const bodyChildren = html.children[1];
console.log(bodyChildren);

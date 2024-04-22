//ordinary function

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

//arrow function

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(10, 5));

//If the function body is a single line, you can leave out the curly braces and the return keyword, returning the value directly:

const multiply = (a, b) => a * b;

console.log(multiply(10, 4));

//ASYNCHRONOUS ARROW FUNCTIONS

//ordinary function

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

//arrow function
//You can't always use async/await at the top level of a JS file, so using a main function that is async is a simple way to ensure you can use async/await.

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

async function main() {
  const posts = await getPosts();
  console.log("Posts:", posts);
}
main();

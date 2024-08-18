function calculate(a, b) {
  const result = a + b;
  return result;
}

const x = 10;
const y = 20;

const sum = calculate(x, y);

console.log(sum);

function greeting(name) {
  if (name) {
    console.log("hello, " + name);
  } else {
    console.log("You are a stranger");
  }
}

greeting("name");

var myVar = 10;
let myLet = "Hello";
const myConst = true;

let person = {
  name: "John",
  age: 30,
  isMarried: false,

  greet() {
    console.log(
      `Hello ${this.name}, age is ${this.age}, Civil status: ${this.isMarried}`
    );
  },
};

person.greet();

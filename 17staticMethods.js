class Calculator {
  add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

const calculatorInstance = new Calculator();
console.log(calculatorInstance.add(5, 5)); // Output: 10
console.log(calculatorInstance.add(25, 35)); // Output: 60

// Correct way to call a static method:
console.log(Calculator.multiply(5, 5)); // Output: 25

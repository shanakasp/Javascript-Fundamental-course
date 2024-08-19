// Inheritance allows a new class to inherit properties and methods from an existing class. helps to code reusability.

class Animal {
  alive = true;

  eat() {
    console.log(`Animal ${this.name} is eating`);
  }
  sleep() {
    console.log(`Animal ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";
}

class Fish extends Animal {
  name = "fish";
}

class Hawk extends Animal {
  name = "hawk";
}

const rabbit = new Rabbit();
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();

// Static method is a method that belongs to the class itself rather than to instances of the class . This means static method can be called on the class, but not and object or instances created from the class.

class MathUtil {
  static pi = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircumFerence(radius) {
    return MathUtil.pi * this.getDiameter(radius);
  }
}

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }
}
const user1 = new User("shanaka");
const user2 = new User("prince");
const user3 = new User("prince123");

console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCircumFerence(5));

console.log(user1.username);
console.log(user2.username);
console.log(User.userCount);

class Person {
  //   constructor(name = "anonymous") {
  //     this.name = name;
  //     console.log(name);
  //   }

  constructor(name = "anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDesc() {
    return `${this.name} is ${this.age} old`;
  }
}

class Student extends Person {
  constructor(name, age, dep = "cs") {
    super(name, age);
    this.dep = dep;
  }

  getDesc() {
    return `${this.name} is ${this.age} old and is doing ${this.dep}`;
  }

  hasMajor() {
    return !!this.dep;
  }
}

const me = new Person("anusha");
console.log(me);

const other = new Student();
console.log(other.getDesc());
console.log(other.hasMajor());

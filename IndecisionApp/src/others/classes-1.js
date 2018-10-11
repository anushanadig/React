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

const me = new Person("anusha");
console.log(me);

const other = new Person();
console.log(other.getDesc());

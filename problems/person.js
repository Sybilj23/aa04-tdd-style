class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Say hello to ${this.name}`;
  }
  visit(otherPerson) {
    return `${this.name} visit ${otherPerson.name}`;
  }
  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }
  update(obj){
    if(typeof obj === 'object'){
      console.log('is an object');
    }
  }
}
let coolPerson = new Person("mai", 32); // Person { name: 'mai', age: 32 }
let person1 = new Person("Lulu", 32); // Person { name: 'mai', age: 32 }
console.log(coolPerson.switchVisit(person1));
module.exports = Person;

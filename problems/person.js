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
// console.log(coolPerson.switchVisit(person1));
coolPerson.update({ name: 'Chris', age: 33})// new values such as { name: 'mai', age: 32 }
// going to have to call update
// //pass in an object to update
//reassign this.age and this.name to the values from the object
module.exports = Person;

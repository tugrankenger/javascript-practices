function Person(date, firstName, lastName) {
  this.date = date;
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

let person = new Person('01.01.3333', 'john', 'locke');

console.log('person normal: ', person);
console.log('person proto: ', person.getFullName());

// create person class using constructor (syntatic sugar)
class Person2 {
  date:string;
  firstName :string;
  lastName :string;

  constructor(date :string, firstName:string, lastName:string) {
    this.date = date;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let personConst = new Person2('01.02.2333', 'tugran', 'kenger');

console.log('person constructor: ', personConst.getFullName());

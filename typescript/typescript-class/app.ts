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


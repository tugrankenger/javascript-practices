/* 
readonly is often used in class properties 
if you want to immutable class properties you can use the readonly access modifier
const is often used for define variable
*/

class Person {
  // immutable access modifier
  readonly birthDate: Date;
  firstName: string;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let person = new Person(new Date(2000, 12, 12));
console.log(person);
//compiler error
//person.birthDate = new Date(2003,11,11)

/*
readonly is often used in class properties
if you want to immutable class properties you can use the readonly access modifier
const is often used for define variable
*/
var Person = /** @class */ (function () {
    function Person(birthDate) {
        this.birthDate = birthDate;
    }
    return Person;
}());
var person = new Person(new Date(2000, 12, 12));
console.log(person);
//compiler error
//person.birthDate = new Date(2003,11,11)

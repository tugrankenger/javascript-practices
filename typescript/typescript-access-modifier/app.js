var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullname = function () {
        return "".concat(this.firstName, " - ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('tugran', 'kenger');
console.log(person.getFullname());
// console.log(person.firstName); // compile error
//public modifier
var PersonPublic = /** @class */ (function () {
    function PersonPublic(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonPublic.prototype.getFullName = function () {
        return "".concat(this.firstName, " - ").concat(this.lastName);
    };
    return PersonPublic;
}());
var personPublic = new PersonPublic("john", "locke");
console.log("person public: ", personPublic.getFullName());
// protected modifier
var PersonProtected = /** @class */ (function () {
    function PersonProtected(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    PersonProtected.prototype.getPersonInfo = function () {
        return "".concat(this.firstName, " - ").concat(this.lastName, " - ").concat(this.age);
    };
    return PersonProtected;
}());
var personInfo = new PersonProtected("kate", "austen", 11);
console.log("person info: ", personInfo.getPersonInfo());

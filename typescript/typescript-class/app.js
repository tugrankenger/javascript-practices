function Person(date, firstName, lastName) {
    this.date = date;
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function () {
    return "".concat(this.firstName, " ").concat(this.lastName);
};
var person = new Person('01.01.3333', 'john', 'locke');
console.log('person normal: ', person);
console.log('person proto: ', person.getFullName());
// create person class using constructor (syntatic sugar)
var Person2 = /** @class */ (function () {
    function Person2(date, firstName, lastName) {
        this.date = date;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person2.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person2;
}());
var personConst = new Person2('01.02.2333', 'tugran', 'kenger');
console.log('person constructor: ', personConst.getFullName());

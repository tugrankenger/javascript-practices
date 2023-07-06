var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "firstName", {
        // constructor(firstName: string, lastName: string, age: number) {
        //   this.firstName = firstName;
        //   this.lastName = lastName;
        //   this.age = age;
        // }
        get: function () {
            return this._firstName;
        },
        set: function (theFirstName) {
            if (!theFirstName) {
                throw new Error('Firstname is required');
            }
            this._firstName = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (theLastName) {
            if (!theLastName) {
                throw new Error('Lastname is required');
            }
            this._lastName = theLastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "".concat(this._firstName, " ").concat(this._lastName);
        },
        set: function (name) {
            var parts = name.split(' ');
            if (parts.length != 3) {
                throw new Error('invalid name format');
            }
            this._firstName = parts[0];
            this._lastName = parts[1] + " " + parts[2];
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
// let person = new Person('tugran', 'kenger', 13);
// console.log('protector of seven kingdoms: ', person);
var person = new Person();
person.age = 12;
console.log('person-age: ', person.age);
person.firstName = 'tugran';
person.lastName = 'kenger';
console.log('fullname: ', person.fullName);
person.fullName = 'john locke hunter';
console.log("test-fullname: ", person.fullName);

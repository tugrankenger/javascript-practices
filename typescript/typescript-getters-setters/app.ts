class Person {
  private _firstName: string;
  private _lastName: string;
  private _age: number;

  // constructor(firstName: string, lastName: string, age: number) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  // }

  public get firstName() {
    return this._firstName;
  }

  public set firstName(theFirstName: string) {
    if (!theFirstName) {
      throw new Error('Firstname is required');
    }
    this._firstName = theFirstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(theLastName: string) {
    if (!theLastName) {
      throw new Error('Lastname is required');
    }
    this._lastName = theLastName;
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this._age = theAge;
  }

  public get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  public set fullName(name: string) {
    let parts = name.split(' ');
    if (parts.length != 3) {
      throw new Error('invalid name format');
    }
    this._firstName = parts[0];
    this._lastName = parts[1] + " " + parts[2];
  }
}

// let person = new Person('tugran', 'kenger', 13);
// console.log('protector of seven kingdoms: ', person);

let person = new Person();
person.age = 12;
console.log('person-age: ', person.age);

person.firstName = 'tugran';
person.lastName = 'kenger';

console.log('fullname: ', person.fullName);


person.fullName = 'john locke hunter'

console.log("test-fullname: ",person.fullName)
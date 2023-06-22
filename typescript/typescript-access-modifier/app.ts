class Person {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullname(): string {
    return `${this.firstName} - ${this.lastName}`;
  }
}

let person = new Person('tugran', 'kenger');

console.log(person.getFullname());

// console.log(person.firstName); // compile error

//public modifier

class PersonPublic {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName:string){
    this.firstName = firstName
    this.lastName = lastName
  }

  public getFullName(){
    return `${this.firstName} - ${this.lastName}`
  }
}

var personPublic = new PersonPublic("john","locke")
console.log("person public: ",personPublic.getFullName())

// protected modifier

class PersonProtected{
  constructor(protected firstName:string, private lastName:string, private age: number){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  getPersonInfo(){
    return `${this.firstName} - ${this.lastName} - ${this.age}`
  }
}

var personInfo = new PersonProtected("kate","austen",11)

console.log("person info: ", personInfo.getPersonInfo())
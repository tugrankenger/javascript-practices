// ... :type

let counter: number;
counter = 222;

let lastName: string = 'tugran';
let age: number = 1111;
let active: boolean = true;

let nameArray: string[] = ['john locke', 'desmond hume', 'kate austen'];
nameArray.push('tugrankenger');
let numberArray: number[] = [1, 2, 3, 4, 5, 6, 7];

let person: {
  name: string;
  age: number;
  active: boolean;
};

person = {
  name: 'tugran',
  age: 111,
  active: true,
};

console.log(person);


let greeting : (name:string) => string

greeting  = (name:string) =>{
  return `hi ${name}`
}

console.log(greeting("tugrankenger"));

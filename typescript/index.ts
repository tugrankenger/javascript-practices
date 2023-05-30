let actor: { name: string; character: string; age: number } = {
  name: "Terry O'Quinn",
  character: 'John Locke',
  age: 13,
};

// syntax : let actor :{... define types ...} = {...}

// you can define object types with interface:

interface ActorInterface {
  name: string;
  character: string;
  age: number;
}

let actor2: ActorInterface = {
  name: 'Elizabeth Mitchell',
  character: 'Juliet Burke',
  age: 13,
};

// you can defaine object with type keyword

type ActorType = {
  name: string;
  character: string;
  age?: number; // optional chaining
};

let actor3: ActorType = {
  name: 'Desmond Hume',
  character: 'hugo',
  // age: 111,
};

// interface SumDigit {
//   (x:number,y:number):number
// }

// create function type

type Sum = (x: number, y: number) => number;

const sum: Sum = (x, y) => {
  return x + y;
};

const result = sum(2, 3);

const movies: Array<ActorType> = [
  { name: 'lost', character: 'hugo', age: 33 },
  { name: 'breaking bad', character: 'walter white', age: 111 },
];

// union types:
type name = number | string
type age = number

//literal types:

// type name2 = "tugran"
// type age2 = 13

// generics types

interface ActorGen<name, age> {
  name: name;
  age?: age;
}

let getActor: ActorGen<name, age> ={
  name:"tugran",
  age: 11,
}

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
  age?: number; // optional chaining
};

let actor3: ActorType = {
  name: 'Desmond Hume',
  // age: 111,
};

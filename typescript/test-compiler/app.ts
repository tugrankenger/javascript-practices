let message: string = 'test-compiler';

let heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);

console.log('message:', message);

interface Product {
  id: number;
  name: string;
  price: number;
}

function getProduct(id:number): Product {
  return{
    id:id,
    name: `nice computer ${id}`,
    price:13,
  }
}

console.log(getProduct(333));


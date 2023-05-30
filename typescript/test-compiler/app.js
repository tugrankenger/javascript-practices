var message = 'test-compiler';
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
console.log('message:', message);
function getProduct(id) {
    return {
        id: id,
        name: "nice computer ".concat(id),
        price: 13
    };
}
console.log(getProduct(333));

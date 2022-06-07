const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");

eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);

    firstSelect.onchange = function(){
        
    };
    secondSelect.onchange = function(){

    };
}

function exchangeCurrency(){
    console.log("event runned");
}
document.getElementById("convert").addEventListener("click",change);

function change(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://api.exchangerate.host/latest",true);

    xhr.onload = function(){
        const response = JSON.parse(this.responseText);
        console.log(response);

        const rate = response.rates.TRY;

        const amount = Number(document.getElementById("amount").value);
        document.getElementById("tl").value = rate*amount;
    }
    xhr.send();
}
async function test(data){ // async ifadesi fonksiyonun kesinlikle bir promise return edecegini belirtir.
    // return new promise
    //return data // burada data ifadesi promise'de resolve()'nin icine yazilmis oluyor
    return new Promise((resolve,rejet)=>{
        resolve(data)
    })
}

// fonksiyonun basina async yazarsak return ettigimiz datayi alip bize bir promise donderecek.

test("hiii").then(response => console.log(response)) 


// await
// await bir promise'in resolve etmesini bekler.
// await sadece async olan bir foksiyon icinde calisir.

async function testAwait(data){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(data)
        },3000)
    });
    let response = await promise; // 3 sn bekler
    return response;
}

testAwait("test await").then(response => console.log(response));

async function testData(data){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof data == "string"){
                resolve(data);
            }else{
                reject(new Error("please entry a string value") );
            }
        },3000)
    })
    let response = await promise;
    return response
}

testData(234)
.then(response => console.log(response))
.catch(err => console.log(err))

// await genelde fetch islemleri icin kullanilir.

async function getCurrency(url){
    const response = await fetch(url); // response object

    const data = await response.json(); // json object

    console.log(data)
}

getCurrency("https://api.exchangeratesapi.io/latest");
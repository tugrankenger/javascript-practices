function getData(data){ // the function is return object of promise
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("return positive result");
            //reject("return negative result");
        },10000);
    });
}

console.log(getData("heeyooo")); //  before run the function => PromiseState:"pending"
                                 //  before run the function => PromiseResult: undefined
                                 //  after 10 seconds => PromiseState:"fulfilled"
                                 //  after 10 seconds => PromiseResult: "return positive result"

// e.g-2 then and catch

function getData2(data2){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            //resolve("positive result");
            reject("negative result");
        },5000);
    });
}

// getData2("heeyoo2").then(function(response){
//     console.log(response);
// });

getData2("heeyoo2").catch(function(err){
    console.log(err)
})

// both resolve and reject

function getData3(data3){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data3 === "string"){
                resolve(data3);
            }else{
                reject(new Error("Please entry a string value"));
            }
        },5000);
    });
}

getData3(123456)
.then(response => console.log(response))
.catch(err => console.error(err))

// we use a lot of then but we use only one catch

function addTwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }else{
                reject(new Error("please entry a number value"));
            }
        },3000)
    });
}

addTwo(10).then(response =>{
    console.log(response);
    return response +2;
})
.then(response2 => console.log(response2))
.catch(err => console.error(err));
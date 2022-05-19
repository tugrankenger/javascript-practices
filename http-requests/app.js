// ajax, callback, httprequests

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    get(url, callback){
        this.xhr.open("GET",url);

        this.xhr.onload = function(){
            //console.log(this)
            if(this.status === 200){
                callback(null,this.responseText); // istegimiz bitti
            }else{
                //hata durumu
                callback("An error occurred", null)
            }
        }//.bind(this) // ya da function'i sil onun yerine arrow function kullan, this otomatik olarak bind edilmis olur
        this.xhr.send();
    }

    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // json verisi gonderecegimizi soyledik, bu form verisi de olabilirdi.

        this.xhr.onload = () =>{
            if(this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            }else{
                callback("An error has occurred",null)
            }
        }

        // veri transferi yapiyoruz, json objesini string'e cevirmemiz gerekiyor.
        this.xhr.send(JSON.stringify(data)); 
    }

    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // json verisi gonderecegimizi soyledik, bu form verisi de olabilirdi.

        this.xhr.onload = () =>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }else{
                callback("An error has occurred",null)
            }
        }

        // veri transferi yapiyoruz, json objesini string'e cevirmemiz gerekiyor.
        this.xhr.send(JSON.stringify(data)); 
    }

    delete(url, callback){
        this.xhr.open("DELETE",url);

        this.xhr.onload = function(){
            //console.log(this)
            if(this.status === 200){
                callback(null,"Data deletion successful"); // istegimiz bitti
            }else{
                //hata durumu
                callback("An error occurred", null)
            }
        }//.bind(this) // ya da function'i sil onun yerine arrow function kullan, this otomatik olarak bind edilmis olur
        this.xhr.send();
    }
}


const requset = new Request();

requset.get("https://jsonplaceholder.typicode.com/albums/8",function(err,response){
    if(err === null){
        console.log(response);
    }else{
        // hata
        console.log(err)
    }
})

//console.log(albums) // asenkron islem oldugu icin ilk basta burasi calisir, bunun icin callback kullanmaliyiz.

// POST request

requset.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"tugrankenger"},function(err,album){
    if(err === null){
        console.log(album)
    }else{
        console.log(err)
    }
})
requset.put("https://jsonplaceholder.typicode.com/albums/10",{userId:112,title:"tugrankenger-put"},function(err,album){
    if(err === null){
        console.log(album)
    }else{
        console.log(err)
    }
})
requset.delete("https://jsonplaceholder.typicode.com/albums/8",function(err,response){
    if(err === null){
        console.log(response);
    }else{
        // hata
        console.log(err)
    }
})
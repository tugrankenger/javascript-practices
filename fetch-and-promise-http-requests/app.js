class Request{

    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response =>{
                return response.json();
            })
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}

const request = new Request();

request.get('https://jsonplaceholder.typicode.com/albums')
.then(albums=> console.log(albums))
.catch(err => console.error(err))

//console.log(albums); // asenkron
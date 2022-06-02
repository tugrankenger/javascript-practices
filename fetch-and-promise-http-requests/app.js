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

    post(url, data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-type':'application/json; charset= UTF-8',
                },
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers:{
                    'Content-type':'application/json; charset= UTF-8',
                },
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(afterDeleted => resolve('Deleted successfully'))
            .catch(err => reject(err))
        })
    }
}

const request = new Request();

request.get('https://jsonplaceholder.typicode.com/albums')
.then(albums=> console.log(albums))
.catch(err => console.error(err))

//console.log(albums); // asenkron

request.post('https://jsonplaceholder.typicode.com/posts',{"userId":333,"title":"tugrankenger"})
.then(addedItem => console.log(addedItem))
.catch(err => console.error(err))

request.put('https://jsonplaceholder.typicode.com/posts/1',{body:"tugrankenger",userId:3334})
.then(updatedData => console.log(updatedData))
.catch(err => console.error(err))

request.delete('https://jsonplaceholder.typicode.com/albums/1')
.then(resultText => console.log(resultText))
.catch(err => console.error(err))


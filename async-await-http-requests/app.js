class Requests {
    async get(url){
        const response = await fetch(url);
        const data = await response.json();
        return data
    }

    async post(url,data){
        const response = await fetch(url,{
            method: 'POST',
            body:JSON.stringify(data),
            headers: {
                "Content-type":"application/json; charset= UTF-8"
            }
        });
        const dataPost = await response.json();
        return dataPost;
    }

    async put(url,data){
        const response = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type":"application/json; charset= UTF-8"
            }
        })
        const dataPut = await response.json();
        return dataPut;
    }

    async delete(url){
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1',{
            method: 'DELETE'
        });
        // const dataDelete = await response.json();
        // return dataDelete;

        return "data deletion was successful"
    }
}

const request = new Requests();
request.get("https://jsonplaceholder.typicode.com/albums")
.then(response => console.log(response))
.catch(err => console.log(err))

request.post('https://jsonplaceholder.typicode.com/albums',{userId:1,title:'aaaaa'})
.then(response => console.log(response))
.catch(err => console.log(err))

request.put('https://jsonplaceholder.typicode.com/albums/1',{userId:10,title:'put request'})
.then(response => console.log(response))
.catch(err => console.log(err));

request.delete('https://jsonplaceholder.typicode.com/albums/1')
.then(response => console.log(response))
.catch(err => console.log(err));
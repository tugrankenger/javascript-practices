function getTextFile(){  ///local text file
    fetch("example.txt")
    .then(response =>{
        return response.text();
    })
    .then(responseText => console.log(responseText))
    .catch(err => console.error(err));
}

getTextFile();

function getJsonFile(){  //local json file
    fetch("example.json")
    .then(response => {
        return response.json();
    })
    .then(responseTextJson => console.log(responseTextJson))
    .catch(err => console.error(err))
}

getJsonFile();

function getExternalApi(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(responseText => console.log(responseText))
    .catch(err => console.error(err))
}

getExternalApi();
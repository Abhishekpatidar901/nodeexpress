function fetchdata(callback){
    setTimeout(()=>{
        const data = 'Hello, Callback!';
        callback(data);
    },1000);
}

function fetchDataPromise(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            const data = 'Hello, Promise!';
            resolve(data);
        },1000);
    });
}

async function fetchDataAsyncAwait(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            const data ='hello, Async/Await!';
            resolve(data);
        },1000);
    }) 
}

fetchdata(result=>{
    console.log(result);
    fetchDataPromise()
       .then(result =>{
        console.log(result);
    fetchDataAsyncAwait()
       .then(result =>{
    h
        .catch(error=>{
            console.error(error);
        });
       })
       .catch(error=>{
        console.error(error);
       });
});
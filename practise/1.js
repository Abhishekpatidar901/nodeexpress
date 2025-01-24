const prom = new Promise ((resolve,reject)=>{
   setTimeout(()=>{
resolve('Operation succeeded!');
   },1000);

});

const failedpromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    reject('Operation failed!');
    },1000);
});
prom.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error(error);
});


prom.then((res)=>{
    console.log(res);
    return 'New Value';
})
.then((newv)=>{
    console.log(newv);
})
.catch((error)=>{
    console.log(error);
});


const prom1 = Promise.resolve('One');
const prom2 = Promise.resolve('Two');

Promise.all([promise1,promise2])
.then((values)=>{
    console.log(values);
})
.catch((error)=>{
    console.log(error);
});
let myPromise = new Promise(function(resolve,reject){
    let a= 1+1;
    if(a==3){
        resolve('successful')
    } else {
        reject("faild")
    }
});
myPromise.then((message)=>{
    console.log(`this is in than, ${message}`)
}).catch((message)=>{
    console.log(`this is the catch, ${message}`)
});
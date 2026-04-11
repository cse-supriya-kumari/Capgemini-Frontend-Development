// !-----promise 
// ~--- promise is an Object
// ^---which represent eventual compltition or failure of an asynchronous task 


// !----3 state in promise 
// ~----1-pending
// ~----2-fulfiled
// ~----3-rejected

let myPromise = new Promise((res,rej)=>{
    let pizzaReady=false;

    if(pizzaReady){
        res('pizza is ready')
    }else{
        rej('pizza is not ready')
    }
})
console.log(myPromise);
myPromise
    .then(t=>console.log(t))
    .catch(c=>console.log(c))
    .finally(a=>console.log('i am finally'));
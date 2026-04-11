// !!--------

// console.log('start');
//     for(let i=0; i<=500; i++){
//         console.log(i);
//     }
// console.log('end');


// !------ SetTimeOut()

// console.log('start');
// setTimeout(()=>{
//     console.log('hello');
// },2000);

// console.log('end');

// !----- setInterval() 

// console.log('start');
// setInterval(()=>{
//     console.log('end');
// },2000)


// !----- clearInterval()

let greet =setInterval(()=>{
    console.log('hello..');
},1000)

setTimeout(()=>{
    clearInterval(greet)
},3000)


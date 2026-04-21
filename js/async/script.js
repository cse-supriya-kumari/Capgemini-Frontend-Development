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

// let greet =setInterval(()=>{
//     console.log('hello..');
// },1000)

// setTimeout(()=>{
//     clearInterval(greet)
   
// },3000)

// clearTimeout(greet);
// console.log('end');

// !-----async and await
// ?--- async & await

// async function getData() {
//     let resp = await fetch("https://fakestoreapi.com/products");
//     console.log(resp);
    
//     let data = await  resp.json()
//     console.log(data);
    
//     console.log(data[3]);
//     console.log(data[3].category);
//     console.log(data[3]['title']);
    
    
    
// }
// getData()


// !-----Json (javaScript object Notation)
// !----- data type not allowed in jashon  --> undefined, bigInt, function
// !-----  JSON.Stringfy() js object --> JSON
// !-----  JSON.parse() JSON --> js object

let person ={
    username:'vaibhav',
    age:19,
    isMarried:true,
    skills:['js','ts','rectjs'],
    greet:function(){
        console.log('hello everyone...');
    },
    address:{
        pin:416003,
        country :'india'
    },
    kids:undefined,
    ex:null,
    // salary:999999n
};
console.log(person);

//?big int function undefiend data type are not allowed in the json
let res=JSON.stringify(person);
console.log(res);

console.log(typeof res);

let final = JSON.parse(res);
console.log(final);


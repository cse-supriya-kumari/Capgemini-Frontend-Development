// !------ named function 

// function add(a=10,b=20) {
//     console.log(a+b);
// }
// add(70,40) //actual parameters

// !------- anonymous function / unmamed function

// (function (a,b){       //identifier expected
//     console.log(a+b);
//     }(30,30))


// !-------IIFE (Immediately Invoked Function Expression) 
// (function (a,b){       //identifier expected
//     console.log(a*b);
//     })(30,35)


// !-------function expression (staring function inside variable)

// let div=function (a,b) {
//     console.log(a/b);
// }
// div(40,5);


// !-------Higher order functuion  & callback function
//  !-------Higher order functuion : function which accept another function as perameter
// !-------callback function : function which is passed as an argument to another function 

// function hof(name, clb){
//     console.log(name);
//     clb();
// }
// function callback(){
//     console.log("i am from callback function");
// }

// hof('supriya', callback)

// !------arrow function 
// !----its shorter way to create the function 
// !-------no need to use function keyword 
// let mult =(a,b)=>{
//     console.log(a*b);
// }
// mult(20,30)

// !------feature of arrow function 
// !------if arrow funvtion is accepting  only 1 parameter no need to write paranthesis
// let mult = a => {
//     console.log(a*a);
// }
// !------if arrow function contains only 1 statement  inside it we can skip curly bracets
// let mult = a => console.log(a*a);
// !------if arrow function contains only 1 statement ans we should not use curly bracket
// !-----then only arrow function can return values implicitly
// !-----explicitly return 
// function add(a,b){
//     return a+b;
//    console.log(a+b);

// }
// let res =add(20,30);
// console.log(res);

// console.log(add(50,50));
// add(100,200)


// !-------implicit return (it only avilable for arrow function)

// let mult=(a,b)=>a*b
// let res=mult(40,5);
// console.log(res);

// !-- implicit return (it only available for arrow function)

// let mult = (a,b) => a*b;
// let res = mult(40,5);
// console.log(res);


// !-- nested function

// function parent(name,city){
//     console.log(name);
//     function child(){
//         console.log(city);
        
//     }
//     child();
// }
// parent('shusant','Bangalore');


// !-- closure

// console.log('start');

// function parent(name,city){
//     console.log(name);
//     function child(){
//         console.log(city);
        
//     }
//     child();
// }
// parent('ritika','hp')
// console.log('end');


// !-- function currying

// function outer(a){
//     let name = 'ritika';

//     return function inner(b){
//         console.log(name);
        
//         return function innerMost(c){
//             console.log('i am from lpu');
//             console.log(a+b+c);
            
//         }
//     }
    
// }
// outer(10)(20)(30)

// !-- currying in arrow function

// let mult = a=>b=>c=>a*b*c;

// let res = mult(10)(2)(3);
// console.log(res);
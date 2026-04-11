// console.log('Hiii.......')

//! ---variable 

// !----var , let , const (keywords)

// var a = 10;
// var username ='supriya';
// let b =20;

// !---declaration 
//!---var

// var a; //only declaration is possible with var 
// a=10; // initialization in different line possible with var 
// console.log(a); 

// a=20; //re-initialization is possible with var 
// console.log(a);

// var a=30; // re-declaration is possible with var but not with let and const
// console.log(a);

// !---let 

// let a; // only declaration is possible with let
// a=10; // initialization in different line possible with let
// console.log(a);

// a=20; // re-initialization is possible with let
// console.log(a);

//let a=20; // re-declaration is not possible with let 


// !----const 

//const a; // only declaration is not possible 
//const a=10;
//a=20; // re-initialization is not possible with const
// console.log(a);

//const a=10; // re-declaration is not possible with const


// !---difference according to scope 

// {
//     var a = 10;
// }
// console.log(a); 

// {
//     let a = 10;
// }
// console.log(a);

// {
//     const a = 10;
// }
// console.log(a);

// let b = 20;
// {
//     console.log(b); 
// }


// !---function scope 

// {
//     var a = 10;
// }
// console.log(a);


// function add(){
//     var a = 10;
// }
// add();
// console.log(a);

// !---dataType 

// !--number 
// var a = 10;


// !--String 
// let username = 'Supriya';
// const collage = "LPU";
// let details = `I am ${username} "from" ${collage}`;
// console.log(details);


// let details="I am from 'LPU' Punjab";
// console.log(details);


// !--boolean 

// let isMarried = true;
// console.log(typeof isMarried);

// let isMarried = '20';
// console.log( isMarried);

// !-- --undefined 

// let a=undefined;
// console.log(typeof a); 

// !--null 

// let b = null;
// console.log(b);  
// console.log(typeof b);  

// !--BigInt 

// let salary = 90000000000000000000000067n;
// console.log(salary);
// console.log(typeof salary);

// !---array 

// let arr = ['vikash',18,true];
// console.log(arr);

// let a=10;
// let b=20;
// let result = a+=b;
// a= a+b;
// console.log(result);


// !---- == ===

// let a = 10;
// let b = '10';
// console.log(a==b);
// console.log(a===b);

// ------

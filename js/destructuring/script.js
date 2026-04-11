//!------ Array destructuring
//!-----Extractiong element from array and storing inside varaibale
// !---------- we can give any veriable name

// let marks=[10,20,30,40,80];

// console.log(marks[2]);


// let [a,b,c]=marks;
// console.log(a);

// let[x,,z]=marks;
// console.log(x);
// console.log(z);


// !-------object destructing
// !--------extracting properties from an object and storing inside varaiable
//!-----we  need to give same name from variable whcih we used i object peroperties

// let person={
//     name:'sudhant',
//     city:'Banglore'
// }
// let{name,city}=person;

// console.log(name);
// console.log(city);


// !---------spread and rest(...)

// let week1=[10,20,30];
// let week2=[30,60,70];
// let combine=[...week1,...week2];
// console.log(combine);

// !------REST 

// let marks=[10,20,30,40,50,60,70,80,90,110];
// let [a,b,...c]=marks;
// console.log(c)



// !-- spread in Object

// let person = {
//     name: 'ritika',
//     city: 'hp'
// }

// let updatedPerson={
//     ...person,
//     country:'india'
// }
// console.log(updatedPerson);


// !-- rest in Object

// let user = {
//     userName: 'sanat',
//     role: 'admin',
//     salary: 9999999
// }

// let {userName,...extra} = user;
// console.log(extra);


// !------ rest in function 

// function add(a,b,...c){
    //console.log(a+b+c);
//     console.log(c);
//     return c.reduce((acc , cur)=>{
//         return acc+cur
//     },0);
//     console.log(res);
// }
// add(10,20,30,40)

// !----spread in function 
let marks=[10,20,30,40,50,60,70,80];
function add(a,b,c,d,e,f){
    console.log((a+b+c+d+e+f));

}
add(...marks)

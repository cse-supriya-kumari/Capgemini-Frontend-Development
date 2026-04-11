//!----object


// let person={
//     name:'sup',
//     city:'muzaffarpur',
//     age:21,
//     isMarried:true,
//     skills:['promt engineer','java fullstack','selenium','java'],
//     greet:()=>{
//         console.log('hello everyone........');
//     }
// }
// console.log(person);

// console.log(person.name);
// console.log(person['city']);
// console.log(person['skills']);
// console.log(person.age);
// console.log(person.greet);


// !----------------------

let person={
    name:'sup',
    city:'muzaffarpur',
    age:21,
    isMarried:true,
    skills:['promt engineer','java fullstack','selenium','java'],
    greet:function(){
        console.log('hello everyone........');
    }
}
console.log(person);

//!-----object.keys()
let keys=Object.keys(person);
console.log(keys);

// !-----Object.values()
let value = Object.values(person);
console.log(value);

// !-------Object.entries()
let enteries = Object.entries(person);
console.log(enteries);




// person.city='punjab';
// person.degree='Btech';
// delete person.age;
// console.log(person);

// console.log(person.name);
// console.log(person['city]);
// console.log(person['skills]);
// console.log(person.greet());



// !------------seal() modfication is allowed bhut not delete

// Object.seal(person);
// console.log(Object.isSealed(person));
// person.name ='sup';
// person.country ='India';
// person.country.name;
// console.log(person);


// !------ freeze() we can't modify or delete

// Object.freeze(person);

// console.log(Object.isFrozen(person));

// Object.name = 'supriya';
// Object.country = 'Denmark';
// delete person.city;

// console.log(person);

// delete person.greet;
// console.log(person);




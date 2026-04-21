// !-- dom (Document Object Model)
// !--- document.getElementById('')

// let h1= document.getElementById('head1');
// console.log(h1);

// !---- document.getElementsByClassName()

// let parag=document.getElementsByClassName
// console.log(parag);


//  !-----  document.getElementsByTagName()
// let p=document.getElementsByTagName('div');
// console.log(p);


// !---- document.getElementsByName()

// let heading=document.getElementsByClassName('heading');
// console.log(heading);


// !---- document.querySelector()
// let para = document.querySelector('#head1');
// console.log(para);

// !--- document.querySelectorAll()

// let para = document.querySelectorAll('.para');
// console.log(para);


// !----- document.createElement()

// let div=document.createElement('div');
// console.log(div);

//  div.innerHTML='<h1>Hello Everyone</h1>';
// div.innerText='<h2>Good Afternoon...</h2>'
// let body=document.body;
// document.body.append(div)

// let p = document.createElement('p');
// console.log(p);
// p.innerText='Hello .. Me supriya';
// document.body.append(p);
// console.log(p);

// !------css Manipulation

// let main= document.createElement('main');
// let section=document.createElement('section');
// let article=document.createElement('article');

//document.body.append(main);
    // main.append(section);
    // main.append(article);
// !--- append can multiple 
    // main.append(section,article)
// !---- appendChild() i will take only take append child 
    // main.appendChild(section,article)

    // !-----css Manipulation
    // let p=document.createElement('p');
    // p.innerText='Good Morning..........';
    // document.body.append(p);

    // p.style.backgroundColor='red';
    // p.style.color='yellow'

// !------classlist 

// !---classList.add()

// let container=document.querySelector('#container');
// document.body.classList.add('dark')


// !----- classlist.remove()

// document.body.classList.remove('light')

// !------classlist.toggle()

let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    btn.innerText='Light';
console.log(document.body.classList.contains("dark"));
document.body.classList.contains("dark")?(btn.innerText="Light"):(btn.innerText="Dark");
});


// !----contains()





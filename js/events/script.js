// !------- event
        function greet(){
            alert('Welcome everyone.....')
}

// function submit(e){
//     e.preventDefault();
//     confirm('are u sure.....')
// }


// !------preventDefault()
let form = document.getElementById('form')

let inp = document.getElementById('userName')

let h2=document.querySelector('#head2')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    //confirm('are you sure...........')
    console.log(inp.value);
    let res=inp.value;
    h2.innerText=  ` ${res}`
})

h2.addEventListener('click',()=>{
    h2.style.textDecoration='line-through' 
})


inp.addEventListener('inout',()=>{
    console.log(inp.value);
})
// !-----

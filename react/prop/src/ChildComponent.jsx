import React from 'react'

const ChildComponent = (pro) => {
    console.log(pro);
    console.log(pro.uname);
    let{uname,umarks,uprofile,uskills} = pro;
    console.log(pro.uprofile)
   
    pro.uname='aakash';
  return (
    <div>
     <h1> ChildComponent</h1>
     <h2>username: {uname}</h2>
     <h3>marks: {umarks}</h3>
     <img src={uprofile} alt="" />

        
            {
                uskills.map((sk,index)=>(
                    <ul key={index}>
                    <li >{sk}</li>
                    </ul>
                ))
            }
        

    </div>
  )
}

export default ChildComponent

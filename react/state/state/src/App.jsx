// import React, {useState} from 'react'

// const App = () => {
//     let [count, setCount] = useState(0)
//     console.log(count);
    
//     let increment = () => {
//         setCount(count + 1)
//     }
//     let decrement = () => {
//       if(count > 0){
//         setCount(count - 1)
//     }
//   }
//     let reset = () => {
//         setCount(0)
//     }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default App


// !----------------


// import { useState } from 'react'
// import React from 'react';

// const App = () => {
//   let users = ['sup','ritika','saummya']
//  let [name,setName]=useState(users);
//  console.log(name);

//  let setUser =()=>{
//   setName([...name,'Supriya'])
//  }
//   return (
//     <div>
      
//       <ul>
//         {
//           name.map((iteam,index)=>(
//             <li key={index}>
//               {iteam}

//             </li>
//           ))
//         }
//       </ul>
//       <button onClick ={setUser}>Add Users</button>
//     </div>
//   )
// }

// export default App



// !-----
// import { useState } from 'react'
// import React from 'react'

// const App = () => {
//   let[user, setUser]=useState({
//     userName: 'supriya',
//     marks : 90
// })
// console.log(user);

// let updateMarks = () => {
//   setUser({...user,marks: user.marks+10})
// }
//   return (
//     <div>
//       <h2>{user.userName}{user.marks}</h2>
//       <button onClick={updateMarks}>Increase Marks</button>
//     </div>
//   )
// }

// export default App



// !-----------------

// import React, { useState } from 'react'

// const App = () => {
//  let [data,setData] = useState(null)
//   console.log(data);
  
//   return (
//     <div>
//       {
//         data?<h3>{data}</h3>: <h3>No Data</h3>
//       }
//       <button onClick={()=>setData('Data Loaded...')}>Change</button>
//     </div>
//   )
// }

// export default App


// !-------
// import React, { useState } from 'react'


// const App = () => {
//    let [role , setRole] =useState('guest')
//    console.log(role)
//   return (
//     <div>
//       <button onClick={()=>setRole("guest")}>Guest</button>
//       <button onClick={()=>setRole("user")}>User Login</button>
//       <button onClick={()=>setRole("admin")}>Admin Login</button>
//       {
//         role ==='guest' && <h1>You are guest</h1>
//       }
//       {
//         role ==='user' &&  <h1>User Page</h1>
//       }
//       {
//         role === 'admin' && <h1>Admin page</h1>
//       }
      
//     </div>
//   )
// }

// export default App

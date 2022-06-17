import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export const Signup = () => {
    const navigate  = useNavigate()
    const [inputvalues, setInputvalues] = useState({
        name:"",
        email:"",
        password:""
    })
     const inputhandle =(event)=>{
         const{name,value} = event.target
         setInputvalues({...inputvalues,[name]:value})
         console.log(inputvalues)
     }   
    
 
    const formSubmit = async(event)=>{
        event.preventDefault()

await fetch("http:localhost:8080/api/v1/register",{
    method:"POST",
    body:JSON.stringify(inputvalues),
    headers:{
        "content-type":"application/json"
    }
}).then((data)=>{
console.log(data)
}).catch((error)=>{
    console.log(error)
})
        setInputvalues({
            name:"",
            email:"",
            password:""
            
        })
    }
    return (

    <div className="cotainer mt-5">
    
       <form method='post' className = "card col-md-6 p-5 m-auto " onSubmit={formSubmit} action="">
           <label  htmlFor="name">name</label>
           <input placeholder = "name" className='m-1' name='name' onChange={inputhandle} value= {inputvalues.name} type="text" />
           <label  htmlFor="email">email</label>
           <input placeholder = "email" className='m-1' name='email' onChange={inputhandle} value= {inputvalues.email} type="text" />
           <label htmlFor="password">password</label>
           <input placeholder = "password" className='m-1' name = 'password' onChange={inputhandle} value= {inputvalues.password} type="password" />
           <input className=' btn btn-info m-1' type="submit" />
    
       </form>
    </div>)
}

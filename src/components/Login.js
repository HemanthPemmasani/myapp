import React,{useState} from 'react'
import { useAuth } from './auth'

function Login() {
   
const {login}=useAuth()
const [name,setName] =useState("") 
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="name" value={name}
       placeholder="enter username" onChange={(e)=>setName(e.target.value)}/>
       <button onClick={()=>login(name)}>Login</button>
    </div>
  )
}

export default Login

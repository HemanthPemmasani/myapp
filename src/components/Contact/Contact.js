import React from 'react'
import { Outlet,Link, useNavigate } from 'react-router-dom'

function Contact() {
  const navigate=useNavigate()
  return (
    <div>
    <div>
      <li><Link to="personal">Personal</Link></li>
      <li><Link to="professional">professional</Link></li>
      <button onClick={()=>navigate("/")}>go to Home</button>
    </div>
      <h1>This is contact page</h1>
      <Outlet/>
    </div>
  )
}

export default Contact

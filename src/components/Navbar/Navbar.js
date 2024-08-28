import React  from 'react'
import {Link} from "react-router-dom"
import { useAuth } from '../auth'


function Navbar() {
  const {user,logout}=useAuth()
  return (
    <div>
      <h1>Navbar page</h1>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      {user?<li><Link to="/logout" onClick={logout}>Logout</Link></li>:<li><Link to="/login">Login</Link></li>}
      </ul>
    </div>
  )
}

export default Navbar

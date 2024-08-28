import React,{useContext} from 'react'
import { Context } from '../../context/Create'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth'

function Home(props) {
  let context=useContext(Context)
  const data=useAuth()
  console.log(data)
  const navigate=useNavigate()
  return (
    <div>
      <h1>This is Home page component</h1>
      <p>{context}</p>
          <button onClick={()=>navigate("contact/professional")}>pro</button>
    </div>
  )
}
export default Home

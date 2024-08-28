import React from 'react'
import { useLocation, useMatch, useNavigate } from 'react-router-dom'

function Professional() {
  const navigate=useNavigate()
  const location=useLocation()
  console.log(location.pathname)
  console.log(location.state)
  const match=useMatch("contact/professional")
  if(match){
    console.log("hemanth")
  }

  return (
    <div>
      <h1>
        This is Professional Data
      </h1>
      <button onClick={()=>navigate(-1,{replace:true})}>Go Back</button>
    </div>
  )
}

export default Professional

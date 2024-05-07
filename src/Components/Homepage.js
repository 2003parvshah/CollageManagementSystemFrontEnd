import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    
    <div>
      Homepage
      
      <Link to={"/student"}>Go to Student</Link>
    </div>
  )
}

export default Homepage

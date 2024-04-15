import React from 'react'
import { Link } from 'react-router-dom'

function ErrorComp() {
  debugger;
  return (
    <div>
        <p>Page Not Found</p>
        <p> Go back to <Link to='/'  className="text-gray-800  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" >HomePage</Link></p>
    </div>
    
  )
}

export default ErrorComp
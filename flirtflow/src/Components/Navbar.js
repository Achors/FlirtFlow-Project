import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <div> 
         <header >
                <navbar className="nav">
                <div className="nav-dt">
                    <div className="logo"><span className='F-logo'>F</span>F</div>
                    <div className="nav-list">
                            <div>Home</div>
                            <div>Products</div>
                            <div>Login</div>
                    </div>
                </div>
                </navbar>
            </header>
    </div>
  )
}

export default Navbar
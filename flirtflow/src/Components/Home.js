import React from 'react';
import '../App.css';
// import AutoType from './flirt';


function Home(){
    return(
        <div className="back">
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
            <body className="App-body">
                <div>
                    <p className='flirt'>Flirt</p>
                    {/* <p className='flirt'><AutoType text="Flirt" delay={100} /></p> */}
                    <button className='crt-act' >Create Account</button>
                </div>
            </body>

        </div>
    )
}



export default Home;
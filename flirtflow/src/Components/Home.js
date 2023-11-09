import React from 'react';
import '../App.css';
// import AutoType from './Flirt';


function Home(){
    return(
        <div className="back">
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
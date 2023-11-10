import React from 'react';
import '../App.css';
import AutoType from './Flirt';


function Home(){
    return(
        <div className="back">
            <body className="App-body">
                <div>
                    <p className='flirt'><AutoType word="FlirtFlow" delay={300} infinite={true} /></p>
                    
                </div>
                <div>
                <button className='crt-act' >Create Account</button>
                </div>
            </body>

        </div>
    )
}



export default Home;
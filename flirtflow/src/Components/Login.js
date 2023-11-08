import React from 'react'
import '../App.css'



function Login({onSwitchToSignUp}){
    return(
        <div className='parent-card'>
                    <div className='login-pg'>
                            <div>
                                <h2>Sign In</h2>
                            </div>
                            <div>
                                <p>Username:</p> 
                                <input  className="sign-pt" type='text'/>
                            </div>
                            <div>
                                <p>Password:</p> 
                                <input className="sign-pt" type='password'/>
                                
                            </div>
                            <div>
                                <button className='bt-logs'>Login</button>
                                <button className='bt-logs'onClick={onSwitchToSignUp}>Sign Up</button>
                            </div>
                        </div>                

        </div>
    )
}



export default Login
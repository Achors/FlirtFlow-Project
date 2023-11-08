import React from 'react'
import '../App.css'



function Login({onSwitchToSignUp}){
    return(
        <div className='parent-card'>
                    <div className='login-pg'>
                            <div className='Htwo'>
                                <h2>Sign In</h2>
                            </div>
                            <div className='log-pg'>
                                <p>Username:</p> 
                                <input  placeholder='Enter Your Username' className="sign-pt" type='text'/>
                            </div>
                            <div>
                                <p>Password:</p> 
                                <input placeholder='Enter Your Password'className="sign-pt" type='password'/>
                                
                            </div>
                            <div className='log-pg'>
                                <button className='bt-logs'>Login</button>
                                <button className='bt-logs'onClick={onSwitchToSignUp}>Sign Up</button>
                            </div>
                        </div>                

        </div>
    )
}



export default Login
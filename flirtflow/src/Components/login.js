import React from 'react'
import '../App.css'



function Login(){
    return(
        <>
        <div className='parent-card'>
                <div className='pr-data'>
                <div>
                    <h2>Create Account</h2>
                </div>
                <div>
                    <label > Username:
                            <input type='text'/>
                    </label>
                </div>
                <div>
                    <label > Password:
                            <input type='password'/>
                    </label>
                </div>
                <div>
                    <label > Age:
                            <input type='number'/>
                    </label>
                </div>
                <div>
                    <label > Location:
                            <input type='text'/>
                    </label>
                </div>
                <div>
                    <label > Hair color:
                            <input type='text'/>
                    </label>
                </div> 
                <div>
                    <label> Gender:
                            <input type='text'/>
                    </label>

                </div> 
                <div>       
                    <label> Picture:
                        <input type='image' alt="image"/>
                    </label>
                </div>
                <div>
                    <label> Phone:
                        <input type='number'/>
                    </label>
                </div>
                    <div>
                        <button className='bt-logs'>Sign Up</button>
                        <button className='bt-logs'>Back</button>
                    </div>
                </div>

                <div className='login-pg'>
                    <div>
                        <h2>Sign In</h2>
                    </div>
                    <div>
                        <label> Username:</label>
                            <input  type='text'/>
                    </div>
                    <div>
                        <label > Password:
                            <input type='password'/>
                        </label>
                    </div>
                    <div>
                        <button className='bt-logs'>Login</button>
                        <button className='bt-logs'>Sign Up</button>
                    </div>
                </div>

        </div>
        </>
    )
}



export default Login
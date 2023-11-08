import React from 'react'
import '../App.css'

function Signup({onSwitchToSignIn}) {
  return (
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
                            <button className='bt-logs' onClick={onSwitchToSignIn}>Back</button>
                        </div>
                    </div>
  )
}

export default Signup
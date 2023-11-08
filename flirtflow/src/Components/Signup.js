import React from 'react'
import '../App.css'

function Signup({onSwitchToSignIn}) {
  return (
    <div id='log-jp' className='pr-data'>
                    <div className='Htwo'>
                        <h2>Create Account</h2>
                    </div>
                        <div className='pg-log'>
                                <p className='log-jp'> Username: </p>
                                <input placeholder="Enter your Username" className="sign-pt" type='text'/>
                        </div>
                        <div>
                                <p className='log-jp'> Password: </p>
                                <input placeholder="Enter your Password" className="sign-pt" type='password'/>
                        </div>
                        <div>
                                <p className='log-jp'> Age: </p>
                                <input placeholder="Enter your Age" className="sign-pt" type='number'/>
                        </div>
                        <div>
                                <p className='log-jp'> Location: </p>
                                <input placeholder="Enter your Location" className="sign-pt" type='text'/>
                        </div>
                        <div>
                                <p className='log-jp'> Hair color: </p>
                                <input placeholder="Enter your Hair-color" className="sign-pt" type='text'/>
                        </div> 
                        <div>
                                <p className='log-jp'> Gender: </p>
                                <input placeholder="Enter your Gender" className="sign-pt" type='text'/>
                        </div> 
                        <div>
                                <p className='log-jp'> Phone: </p>
                                <input placeholder="Enter your Phone number" className="sign-pt" type='number'/>
                        </div>
                        <div>       
                                <p className='log-jp'> Picture: </p>
                                <input type='image' alt="image"/>
                        </div>
                        <div className='log-pg'>
                            <button className='bt-logs'>Sign Up</button>
                            <button className='bt-logs' onClick={onSwitchToSignIn}>Back</button>
                        </div>
                    </div>
  )
}

export default Signup
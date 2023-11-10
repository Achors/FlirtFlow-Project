import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

function AddUser({onSubmit}) {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
        name: '',
        age: '',
        location: '',
        hair_color: '',
        gender: '',
        phone_number: '',
        profile_picture: '',
  });
  function signingUp(e){
    e.preventDefault();
    onSubmit(formData)
  }

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  function handleSubmission(newUser){
    setUsers(users => [...users, newUser])

    const newData = {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(newUser)
    }
    fetch('http://localhost:3004/users', newData)
    .then(response => response.json())
    .then(res => setUsers(persons => [...persons, res]) )
    .catch((error) => console.error('Error adding user:', error));

    
    }


  return (
    <div>
      <form onSubmit={signingUp} onChange={handleInputChange}>       
        <div className='pg-log'>
                            <p className='log-jp'> Username: </p>
                                <input 
                                placeholder="Enter your Username" 
                                className="sign-pt" 
                                type='text'
                                name='name'
                                value={formData.name}

                                />
                        </div>
                        <div>
                                <p className='log-jp'> Age: </p>
                                <input 
                                placeholder="Enter your Age" 
                                className="sign-pt" 
                                type='number'
                                name='age'
                              
                                />
                        </div>
                        <div>
                                <p className='log-jp'> Location: </p>
                                <input 
                                placeholder="Enter your Location" 
                                className="sign-pt" 
                                type='text'
                                name='location'
                              
                                />
                        </div>
                        <div>
                                <p className='log-jp'> Hair color: </p>
                                <input 
                                placeholder="Enter your Hair-color" 
                                className="sign-pt" 
                                type='text'
                                name='hair_color'
                              
                                />
                        </div> 
                        <div>
                                <p className='log-jp'> Gender: </p>
                                <input 
                                placeholder="Enter your Gender" 
                                className="sign-pt" 
                                type='text'
                                name='gender'
                                value={formData.gender}
                                />
                        </div> 
                        <div>
                                <p className='log-jp'> Phone: </p>
                                <input 
                                placeholder="Enter your Phone number" 
                                className="sign-pt" 
                                type='number'
                                name='phone_number'
                                value={formData.phone_number}
                                />
                        </div>
                        <div>       
                        <input
                                type="text"
                                placeholder="Enter the URL of your profile picture"
                                className="sign-pt"
                                name="profile_picture"
                                value={formData.profile_picture}
          
                          />
                       </div>
                       <button onClick={handleSubmission} className='bt-logs' type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default AddUser;

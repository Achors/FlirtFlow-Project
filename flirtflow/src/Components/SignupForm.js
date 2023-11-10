import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

function SignupForm() {
  const [formData, setFormData] = useState({
        name: '',
        age: '',
        location: '',
        hair_color: '',
        gender: '',
        phone_number: '',
        profile_picture: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0]; 
    setFormData({ ...formData, profile_picture: file });
  };

  const handleSignUp = () => {
    const apiUrl = 'http://localhost:3004'; 


    const formDataSubmission = new FormData();

    for(const key in formData) {
        formDataSubmission.append(key, formData[key]);
    }

    fetch(apiUrl, {
      method: 'POST',
      body: formDataSubmission,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User data saved:', data);
        window.alert("Account creation Successful!")
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <form>       
        <div className='pg-log'>
                            <p className='log-jp'> Username: </p>
                                <input 
                                placeholder="Enter your Username" 
                                className="sign-pt" 
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleInputChange}
                                />
                        </div>
                        <div>
                                <p className='log-jp'> Age: </p>
                                <input 
                                placeholder="Enter your Age" 
                                className="sign-pt" 
                                type='number'
                                name='age'
                                value={formData.age}
                                onChange={handleInputChange}
                                />
                        </div>
                        <div>
                                <p className='log-jp'> Location: </p>
                                <input 
                                placeholder="Enter your Location" 
                                className="sign-pt" 
                                type='text'
                                name='location'
                                value={formData.location}
                                onChange={handleInputChange}
                                />
                        </div>
                        <div>
                                <p className='log-jp'> Hair color: </p>
                                <input 
                                placeholder="Enter your Hair-color" 
                                className="sign-pt" 
                                type='text'
                                name='hair_color'
                                value={formData.hair_color}
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
                                />
                        </div>
                        <div>       
                                <p className='log-jp'> Picture: </p>
                                <input 
                                type='file' 
                                alt="image"
                                accept='image/'
                                name='profile_picture'
                                value={formData.profile_picture}
                                onChange={handlePictureUpload}
                                />
                        </div>
      </form>

      <button 
        className="bt-logs" 
        onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
}

export default SignupForm;

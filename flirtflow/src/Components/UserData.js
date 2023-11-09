import React, { useState, useEffect } from 'react';
import '../App.css'

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((r) => r.json())
      .then(users => setUsers(users))
      .catch((error) => console.error("Error fetching data:", error));

      }, []); //  empty dependency array to ensure this effect runs once when the component mounts

  return (
    <div className="users">
      <div>
          <h1>User Profile</h1>
      </div>
      <div className="userCard">
        {users.map((user) => (
          <div className='profile' key={user.id}>
          <img src={user.profile_picture} alt={`${user.name}`} />
          <h2><span>{user.name}, {user.age}, {user.gender}</span></h2>
          <h3>{user.location}, {user.hair_color}</h3> 
            <p>Tel: {user.phone_number}</p>
            <button className='likes like'>Like</button>
            <button className='likes dislike'>Dislike</button>            
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserData;

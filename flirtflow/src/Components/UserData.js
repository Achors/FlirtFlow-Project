import React, { useState, useEffect } from 'react';
import '../App.css'
import Sidebar from './Sidebar'
import Search from './Search';

function UserData() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((r) => r.json())
      .then(users => setUsers(users))
      .catch((error) => console.error("Error fetching data:", error));

      }, []); //  empty dependency array to ensure this effect runs once when the component mounts

  return (
    <div>    
        <div className="users">
          <div className="tiles">

            <div>
              <h1>User Profile</h1>
            </div>
            <div>
            <input className="search" placeholder="Search" />
            </div>              
          </div>
          <div className="userCard">
              <div>
                <Sidebar />
              </div>
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
    </div>
  );
}

export default UserData;

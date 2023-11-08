import React, { useState, useEffect } from 'react';

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((r) => r.json())
      .then(users => setUsers(users))
      .catch((error) => console.error("Error fetching data:", error));

      }, []); //  empty dependency array to ensure this effect runs once when the component mounts

  return (
    <div className="userCard">
      <h1>User Profile</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
          <img src={user.profile_picture} alt={`${user.name}`} />
          <h2>{user.name}, {user.age}, {user.gender}</h2>
          <h3>{user.location}, {user.hair_color}</h3> 
            <p>Tel: {user.phone_number}</p>
          </div>
        ))}
      </div>
      <button>Like</button>
      <button>Dislike</button>
    </div>
  );
}

export default UserData;

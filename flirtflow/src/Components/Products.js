import React, { useState, useEffect } from 'react';

function Products() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); //  empty dependency array to ensure this effect runs once when the component mounts

  return (
    <div>
      <h1>Dating Site Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>Name: {user.name}</div>
            <div>Age: {user.age}</div>
            <div>Gender: {user.gender}</div>
            <div>Location: {user.location}</div>
            <div>Phone Number: {user.phone_number}</div>
            <div>Hair Color: {user.hair_color}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

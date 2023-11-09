import React, { useState, useEffect } from 'react';
import '../App.css'

function UserData() {
  const [users, setUsers] = useState([]);
  const [genderFilter, setGenderFilter] = useState("All");
  

  useEffect(() => {
    fetch("http://localhost:3004/users")
      .then((r) => r.json())
      .then(users => setUsers(users))
      .catch((error) => console.error("Error fetching data:", error));

      }, []);
      
      const filteredData = genderFilter === "All" ? users : users.filter((user) => user.gender === genderFilter);

  return (
    <div>    
        <div className="users">
          <div className="tiles">
            <div>
              <h1>User Profile</h1>
            </div>              
          </div>
          <div className="card-user">
              <div className='sidebar'>
              <p id="app-name"className='nameed'><span>F</span>lirtFlow</p>
              <input className="search" placeholder="Search" />
              <p className='nameed'>Sort by:</p>
              <label>
              <input name='options' value='All' checked={genderFilter === 'All'}   onChange={() => setGenderFilter("All")} type="radio" />All
              </label>
              <label>
              <input name='options' value='Male' checked={genderFilter === 'Male'} onChange={() => setGenderFilter("Male")} type="radio" />Male
              </label>
              <label>
              <input name='options' value='Female' checked={genderFilter === 'Female'}  onChange={() => setGenderFilter("Female")} type="radio" />Female
              </label>              
              </div>
            <div className="userCard">
           {filteredData.map((user) => (
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
    </div>
  );
}

export default UserData;

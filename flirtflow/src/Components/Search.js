import React, { useState, useEffect } from "react";

function Search() {
  const [user, setUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [genderFilter, setGenderFilter] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3004/users") 
      .then((response) => response.json())
      .then((users) => setUser(users));
  }, []);
  useEffect(() => {
    const filtered = user.filter((user) => {
      if (genderFilter === "All") {
        return true;
      } else {
        return user.gender === genderFilter;
      }
    });
    setFilteredUsers(filtered);
  }, [user, genderFilter]);

  return (
    <div>
            <label>
                <input type="radio" value="All" checked={genderFilter === "All"}
                onChange={() => setGenderFilter("All")}
                />
                All
            </label>

            <label>
                <input type="radio" value="Male" checked={genderFilter === "Male"}
                onChange={() => setGenderFilter("Male")}
                />
                Male
            </label>

            <label> 
                <input type="radio" value="Female" checked={genderFilter === "Female"}
                onChange={() => setGenderFilter("Female")}
                />
                Female
            </label>
            {filteredUsers.map((user) => (
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
  );
}

export default Search;
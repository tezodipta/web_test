// src/components/UsersList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getUsers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users.map((user, index) => (
        <div key={index}>
          <h2>{user.site_name}</h2>
          
          <div>{user.left_block_content}</div>
          <ul>
            {user.p_tags.map((tag, i) => (
              <li key={i}>{tag} <br /> <br /></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
